import express, {
    json
} from 'express'
import v1router from './api/v1/router'
import v2router from './api/v2/router'
import errorHandlers from './utils/errorHandlers'
import ValidationMiddleware from './api/v2/Middleware/ValidationMiddleware';
import limiter from './api/v2/Middleware/rateLimiter';

let app = express()

app.use(json())


app.use('/api/v1/', v1router)
app.use(limiter)
app.use(ValidationMiddleware)
app.use('/api/v2/', v2router)

if (app.get('env') === 'development')
    app.use(errorHandlers.notFound)

app.listen('8000', () => console.log("express listening on port 8000"))