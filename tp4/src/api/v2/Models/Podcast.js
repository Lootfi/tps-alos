import podcasts from '../../../../database/podcasts.json'
import reviews from '../../../../database/reviews.json'
import hosts from '../../../../database/hosts.json'
import {
    writeFileSync
} from 'fs'


export default {
    get_all() {
        return podcasts
    },

    get(id) {
        const podcast = podcasts.find(podcast => podcast.id == id)

        return podcast
    },


    add(podcast) {
        let new_podcasts = [
            ...podcasts,
            {
                ...podcast,
                "id": Date.now().toString(36)
            }
        ]
        const new_data = JSON.stringify(new_podcasts)

        writeFileSync("database/podcasts.json", new_data)

        return new_podcasts
    },


    update(id, data) {
        let index = podcasts.findIndex(podcast => podcast.id == id)
        Object.entries(data).map(([key, value]) => {
            podcasts[index][key] = value
        });

        const new_data = JSON.stringify(podcasts)

        writeFileSync("database/podcasts.json", new_data)

        return podcasts
    },

    delete(id) {
        let index = podcasts.findIndex(podcast => podcast.id == id)

        podcasts.splice(index, 1)
        delete_hosts(id)
        const new_data = JSON.stringify(podcasts)

        writeFileSync("database/podcasts.json", new_data)

        return podcasts
    },

    get_hosts(podcast_id) {

        return hosts.filter(host => host.podcast_id == podcast_id)
    },

    get_reviews(podcast_id) {
        return reviews.filter(review => review.podcast_id == podcast_id)
    }
}