import hosts from '../../../../database/hosts.json'
import {
    writeFileSync
} from 'fs'

export default {
    get_all() {
        return hosts;
    },

    get(id) {
        const host = hosts.find(host => host.id == id)

        return host
    },


    add(host) {
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
    },

    delete(podcast_id) {
        let new_hosts = hosts.filter(host => host.podcast_id != podcast_id)

        const new_data = JSON.stringify(new_hosts)

        writeFileSync("database/hosts.json", new_data)

        return new_hosts
    }
}