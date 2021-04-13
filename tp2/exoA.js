var unirest = require("unirest")

//call this function with the ID of podcast you want to delete
function delete_podcast(id) {
    return unirest
        .delete(`http://localhost:3000/podcasts/${id}`)
        .then(res => {
            if (res.error) throw new Error(res.error)
            console.log(`${res.statusCode} ${res.statusMessage}`)
        })
}