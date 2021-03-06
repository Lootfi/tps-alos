import Podcast from '../Models/Podcast'

export default {
    get_all: (req, res) => {
        res.status(200).json(Podcast.get_all())
    },

    get: (req, res) => {
        const podcast = Podcast.get(req.params.id)
        if (podcast)
            res.status(200).json(podcast)
        else res.status(404).json({
            error: 'Podcast Not Found'
        })
    },

    create: (req, res) => {

        const new_podcasts = Podcast.add(req.body)

        res.status(201).json(new_podcasts)
    },

    update: (req, res) => {

        const id = req.params.id

        const new_podcasts = Podcast.update(id, req.body)

        res.status(200).json(new_podcasts)
    },

    delete: (req, res) => {

        const id = req.params.id

        const new_podcasts = Podcast.delete(id)

        res.status(200).json(new_podcasts)
    },

    get_reviews: (req, res) => {
        const reviews = Podcast.get_reviews(req.params.id)
        if (reviews != [])
            res.status(200).json(reviews)
        else res.status(404).json({
            error: 'Podcast Reviews Not Found'
        })
    }
}