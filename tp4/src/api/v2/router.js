import express from 'express'
import validation from '../../utils/validation'
import PodcastController from './Controllers/PodcastController'
import HostController from './Controllers/HostController'
import ReviewController from './Controllers/ReviewController'
import UserController from './Controllers/UserController'

const router = express.Router()

// podcasts

router.get('/podcasts', PodcastController.get_all)

router.get('/podcasts/:id',
    ...validation.get_podcast,
    PodcastController.get)

router.post('/podcasts',
    ...validation.create_podcast,
    PodcastController.create)

router.put('/podcasts/:id',
    ...validation.update_podcast,
    PodcastController.update)
router.delete('/podcasts/:id',
    ...validation.delete_podcast,
    PodcastController.delete) //deletes hosts too


// hosts

router.get('/podcasts/:id/hosts',
    HostController.get
)

router.post('/podcasts/:id/hosts',
    ...validation.create_host,
    HostController.create)

// reviews

router.get('/podcasts/:id/reviews',
    PodcastController.get_reviews)

router.post('/podcasts/:id/reviews',
    ReviewController.create)

router.delete('reviews/:id',
    ReviewController.delete)


// users

router.get('/users',
    UserController.get_all)

router.get('/users/:id',
    UserController.get)

router.get('/users/:id/reviews',
    UserController.get_reviews)

export default router;