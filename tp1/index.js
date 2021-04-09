var unirest = require('unirest');

function last_name_starts_with(clients,letter) {
    return clients.filter(client => client.name.last[0] == letter)
}

var req = unirest('GET','http://localhost:3000/clients').headers({
    "cache-control": "no-cache" //The response may be stored by any cache, even if the response is normally non-cacheable. 
}).then((res) => {
    if(res.error) throw new Error(res.error)
    var first_10_clients = res.body.slice(0,10)

    console.log(last_name_starts_with(res.body,"M"))
})