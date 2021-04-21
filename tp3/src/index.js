import express, {
    json
} from 'express'
import {
    body,
    validationResult
} from 'express-validator'
import {
    get_podcasts,
    get_podcast,
    add_podcast,
    update_podcast,
    delete_podcast
} from './utils/database'
import validation from './utils/validation'


var app = express()
app.use(json())

app.get('/podcasts', (req, res) => {
    res.json(get_podcasts())
})

app.get('/podcasts/:id', (req, res) => {
    res.json(get_podcast(req.params.id)).status(200)
})

app.post('/podcasts',
    ...validation.create_podcast,
    (req, res) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_podcasts = add_podcast(req.body)

        res.json(new_podcasts).status(201)
    })

app.put('/podcasts/:id',
    ...validation.update_podcast,
    (req, res) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_podcasts = update_podcast(id, req.body)

        res.json(new_podcasts).status(200)
    })

app.delete('/podcasts/:id',
    ...validation.delete_podcast,
    (req, res) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_podcasts = delete_podcast(id)

        res.json(new_podcasts).status(200)
    })

app.listen('8000', () => {
    console.log("express listening on port 8000")
})