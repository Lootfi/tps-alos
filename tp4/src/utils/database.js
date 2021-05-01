import {
    writeFileSync
} from 'fs'
import podcasts from '../../database/podcasts.json'
import hosts from '../../database/hosts.json'
import reviews from '../../database/reviews.json'
import users from '../../database/users.json'




/**
 * PODCASTS
 */

export function get_podcasts() {
    return podcasts
}

export const get_podcast = id => {
    const podcast = podcasts.find(podcast => podcast.id == id)

    return podcast
}


export function add_podcast(podcast) {
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
}


export function update_podcast(id, data) {
    let index = podcasts.findIndex(podcast => podcast.id == id)
    Object.entries(data).map(([key, value]) => {
        podcasts[index][key] = value
    });

    const new_data = JSON.stringify(podcasts)

    writeFileSync("database/podcasts.json", new_data)

    return podcasts
}
export function delete_podcast(id) {
    let index = podcasts.findIndex(podcast => podcast.id == id)

    podcasts.splice(index, 1)
    delete_hosts(id)
    const new_data = JSON.stringify(podcasts)

    writeFileSync("database/podcasts.json", new_data)

    return podcasts
}




/**
 * HOSTS
 */

export function get_hosts() {
    return hosts
}

export const get_podcast_hosts = podcast_id => {

    return hosts.filter(host => host.podcast_id == podcast_id)
}

export function add_host(host) {
    let new_hosts = [
        ...hosts,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}

export function delete_hosts(podcast_id) {
    let new_hosts = hosts.filter(host => host.podcast_id != podcast_id)

    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}


// get_podcast_reviews
export function get_podcast_reviews(podcast_id) {
    return reviews.filter(review => review.podcast_id == podcast_id)
}

//     get_user_reviews
export function get_user_reviews(user_id) {
    return reviews.filter(review => review.user_id == user_id)
}

//     add_review
export function add_review(review) {
    let new_reviews = [
        ...reviews,
        {
            ...review,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_reviews)

    writeFileSync("database/reviews.json", new_data)

    return new_reviews
}

//     delete_review

export function delete_review(id) {
    let index = reviews.findIndex(review => review.id == id)

    reviews.splice(index, 1)
    const new_data = JSON.stringify(reviews)

    writeFileSync("database/reviews.json", new_data)

    return reviews
}

//users

export function get_users() {
    return users
}

//get user

export const get_user = id => {
    const user = users.find(user => user.id == id)

    return user
}


//create user

export function add_user(user) {
    let new_users = [
        ...users,
        {
            ...user,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_users)

    writeFileSync("database/users.json", new_data)

    return new_users
}

//delete user

export function delete_user(id) {
    let index = users.findIndex(user => user.id == id)

    users.splice(index, 1)
    const new_data = JSON.stringify(users)

    writeFileSync("database/users.json", new_data)

    return users
}

//delete user review

export function delete_user_reviews(user_id) {
    let new_reviews = reviews.filter(review => review.user_id != user_id)

    const new_data = JSON.stringify(new_reviews)

    writeFileSync("database/reviews.json", new_data)

    return new_reviews
}