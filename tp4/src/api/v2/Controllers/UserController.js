import {
    validationResult
} from 'express-validator'

import {
    get_users,
    get_user,
    add_user,
    delete_user,
    get_user_reviews,
    delete_user_reviews
} from '../../../utils/database'

export default {
    get_all: (req, res) => {
        res.status(200).json(get_users())
    },
    get: (req, res) => {
        const user = get_user(req.params.id)
        if (user)
            res.status(200).json(user)
        else res.status(404).json({
            error: 'User Not Found'
        })
    },
    get_reviews: (req, res) => {
        const reviews = get_user_reviews(req.params.id)
        if (reviews != [])
            res.status(200).json(reviews)
        else res.status(404).json({
            error: 'User Reviews Not Found'
        })
    },
    create: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_users = add_user(req.body)

        res.status(201).json(new_users)
    },
    delete: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_users = delete_user(id)

        res.status(200).json(new_users)
    },
    delete_all_review: (req, res) => {
        const user_id = req.params.id

        const new_reviews = delete_user_reviews(user_id)

        res.status(200).json(new_reviews)

    }
}