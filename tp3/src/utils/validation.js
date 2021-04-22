import {
    body,
    param,
    check
} from 'express-validator'

function check_if_date(string) {
    return !isNaN(new Date(string).getDate())
}

export default {
    get_podcast: [
        param('id').isString().trim()
    ],
    create_podcast: [
        body('name').isString().trim(),
        body('status').isString().trim(),
        body('listeners').isNumeric().toInt(),
        body('picture').isURL(),
        body('about').isString().trim(),
        body('releaseDate').custom(value => {
            return check_if_date(value)
        }),
        body('category').isString().trim(),
        body('hosts').isArray(),
        check('hosts.*.id').isInt(),
        check('hosts.*.name').isString().isAlpha("en-US", {
            "ignore": [" ", "-", "'"]
        }).trim()

    ],
    update_podcast: [
        body('name').optional().isString().trim(),
        body('status').optional().isString().trim(),
        body('listeners').optional().isNumeric().toInt(),
        body('picture').optional().isURL(),
        body('about').optional().isString().trim(),
        body('releaseDate').optional().custom(value => {
            return check_if_date(value)
        }),
        body('category').optional().isString().trim(),
        body('hosts').optional().isArray(),
        param('id').isString().trim()
    ],
    delete_podcast: [
        param('id').isString().trim()
    ]
}