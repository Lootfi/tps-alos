import fs, {
    writeFileSync
} from 'fs';
import podcasts from '../database/podcasts.json';
import hosts from '../database/hosts.json'

dothing()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dothing() {
    var stream = fs.createWriteStream("database/podcasts.json");
    stream.on('error', console.error);
    let new_podcasts = podcasts
    for (let i = 0; i < podcasts.length; i++) {
        delete new_podcasts[i]['hosts']
    }
    const new_data = JSON.stringify(new_podcasts);
    stream.write(new_data);
    stream.end();
}

function create_host(stream, host) {
    console.log(host.id)
    let new_hosts = [
        ...hosts,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ];
    const new_data = JSON.stringify(new_hosts);
    stream.write(new_data);

}