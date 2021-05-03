import users from '../../../../database/users.json'
import reviews from '../../../../database/reviews.json'
import {
    writeFileSync
} from 'fs'

export default {
    get_all() {
        return users;
    },

    get(id) {
        const user = users.find(user => user.id == id)

        return user
    },

    add(user) {
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
    },

    //delete user

    delete(id) {
        let index = users.findIndex(user => user.id == id)

        users.splice(index, 1)
        const new_data = JSON.stringify(users)

        writeFileSync("database/users.json", new_data)

        return users
    },

    get_reviews(user_id) {
        return reviews.filter(review => review.user_id == user_id)
    },

    delete_reviews(user_id) {
        let new_reviews = reviews.filter(review => review.user_id != user_id)

        const new_data = JSON.stringify(new_reviews)

        writeFileSync("database/reviews.json", new_data)

        return new_reviews
    }

}