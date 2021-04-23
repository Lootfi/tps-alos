import {
    get_hosts,
    get_podcast_hosts
} from "../utils/database"

export default {
    get_all: (req, res) => {
        res.status(200).json(get_hosts())
    },
    get_podcast_hosts: (req, res) => {
        res.status(200).json(get_podcast_hosts(req.params.id))
    }
}