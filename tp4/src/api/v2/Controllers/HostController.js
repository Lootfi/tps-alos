import Host from '../Models/Host'

export default {
    get_all: (req, res) => {
        res.status(200).json(Host.get_all())
    },
    get: (req, res) => {
        const host = Host.get(req.params.id)
        res.status(200).json(host)
    },
    create: (req, res) => {
        const podcast_id = req.params.id

        const new_hosts = Host.add({
            podcast_id,
            ...req.body
        })

        res.status(200).json(new_hosts)
    }
}