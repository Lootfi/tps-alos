import {
    writeFileSync
} from 'fs';
import podcasts from '../../database/podcasts.json';

export function get_podcasts() {
    return podcasts;
}
export function add_podcast(podcast) {
    let new_podcasts = [
        ...podcasts,
        podcast
    ];
    const new_data = JSON.stringify(new_podcasts);

    writeFileSync("database/podcasts.json", new_data);

    return new_podcasts;
}
export function update_podcast(id, data) {
    let index = podcasts.findIndex(podcast => podcast.id == id);
    Object.entries(data).map(([key, value]) => {
        podcasts[index][key] = value;
    });

    const new_data = JSON.stringify(podcasts);

    writeFileSync("database/podcasts.json", new_data);

    return podcasts;
}
export function delete_podcast(id) {
    let index = podcasts.findIndex(podcast => podcast.id == id);

    podcasts.splice(index, 1);

    const new_data = JSON.stringify(podcasts);

    writeFileSync("database/podcasts.json", new_data);

    return podcasts;
}