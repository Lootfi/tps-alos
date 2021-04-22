import express, {
    json
} from 'express'
import router from './router'
import expressValidator from 'express-validator'


let app = express()

app.use(json())

app.use('/api/',
    router)

app.listen('8000', () => {
    console.log("express listening on port 8000")
})