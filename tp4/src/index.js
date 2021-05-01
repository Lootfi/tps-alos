import express, {
    json
} from 'express'
import v1router from './api/v1/router'
import v2router from './api/v2/router'
import errorHandlers from './utils/errorHandlers'
import expressApiVersioning from 'express-api-versioning';

let app = express()

app.use(json())


// const config = {
//     apiPath: path.join(__dirname, './api'),
//     test: /\/api\/(v[0-9]+).*/,
//     entryPoint: 'index.js',
//     instance: app
// };

// app.use(expressApiVersioning(config, (error, req, res, next) => {
//     next();
// }));

app.use('/api/v1/', v1router)
app.use('/api/v2/', v2router)

if (app.get('env') === 'development')
    app.use(errorHandlers.notFound)

app.listen('8000', () => console.log("express listening on port 8000"))