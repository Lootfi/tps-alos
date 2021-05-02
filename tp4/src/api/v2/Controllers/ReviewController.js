import {
    validationResult
} from 'express-validator'

import {
    get_podcast_reviews,
    add_review,
    delete_review
} from '../../../utils/database'

export default {
    get_podcast_reviews: (req, res) => {
        const reviews = get_podcast_reviews(req.params.id)
        if (reviews != [])
            res.status(200).json(reviews)
        else res.status(404).json({
            error: 'Podcast Reviews Not Found'
        })
    },
    create: (req, res) => {

        const new_reviews = add_review(req.body)

        res.status(201).json(new_reviews)
    },
    delete: (req, res) => {

        const id = req.params.id

        const new_reviews = delete_review(id)

        res.status(200).json(new_reviews)
    }
}