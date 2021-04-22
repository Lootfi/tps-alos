import express, {
    json
} from 'express'
import validation from './utils/validation'
import PodcastController from './Controllers/PodcastController'

let app = express()
app.use(json())

app.get('/podcasts', PodcastController.get_all)

app.get('/podcasts/:id', PodcastController.get)

app.post('/podcasts',
    ...validation.create_podcast,
    PodcastController.create)

app.put('/podcasts/:id',
    ...validation.update_podcast,
    PodcastController.update)

app.delete('/podcasts/:id',
    ...validation.delete_podcast,
    PodcastController.delete)

app.listen('8000', () => {
    console.log("express listening on port 8000")
})