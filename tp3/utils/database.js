const fs = require('fs');
let podcasts = require('../database/podcasts.json')

module.exports = {
    add_podcast: podcast => {
        let new_podcasts = [
            ...podcasts,
            podcast
        ]
        const new_data = JSON.stringify(new_podcasts)

        fs.writeFileSync("database/podcasts.json", new_data)

        return new_podcasts;
    },
    update_podcast: (id, data) => {
        let index = podcasts.findIndex(podcast => podcast.id == id)
        Object.entries(data).map(([key, value]) => {
            podcasts[index][key] = value;
        })

        const new_data = JSON.stringify(podcasts)

        fs.writeFileSync("database/podcasts.json", new_data)

        return podcasts;
    },
    delete_podcast: id => {
        let index = podcasts.findIndex(podcast => podcast.id == id)

        podcasts.splice(index, 1)

        const new_data = JSON.stringify(podcasts)

        fs.writeFileSync("database/podcasts.json", new_data)

        return podcasts;
    }
}