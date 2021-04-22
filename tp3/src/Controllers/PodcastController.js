import {
    validationResult
} from 'express-validator'

import {
    get_podcasts,
    get_podcast,
    add_podcast,
    update_podcast,
    delete_podcast
} from '../utils/database'

export default {
    get_all: (req, res) => {
        res.json(get_podcasts()).status(200)
    },

    get: (req, res) => {
        res.json(get_podcast(req.params.id)).status(200)
    },

    create: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_podcasts = add_podcast(req.body)

        res.json(new_podcasts).status(201)
    },

    update: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_podcasts = update_podcast(id, req.body)

        res.json(new_podcasts).status(200)
    },

    delete: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_podcasts = delete_podcast(id)

        res.json(new_podcasts).status(200)
    }
}