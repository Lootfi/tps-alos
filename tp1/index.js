var unirest = require('unirest')
// question 2
function name_starts_with(podcasts, letter) {
    return podcasts.filter(podcast => podcast.name[0] == letter)
}

var req = unirest('GET', 'http://localhost:3000/podcasts').headers({
    "cache-control": "no-cache" // question 3: "response" peut ètre stocké dans le cache si validé par le serveur d'origine, mème si "response" est non-cacheable 
}).then((res) => {
    if (res.error) throw new Error(res.error)

    // question 1
    var first_10_podcasts = res.body.slice(0, 10)
    console.log("FIRST 10 PODCASTS:\n")
    console.log(first_10_podcasts)

    //calling function "name_starts_with" for question 2
    console.log("\n\n\n\n")
    console.log("PODCASTS THAT START WITH THE LETTER M:\n")
    console.log(name_starts_with(res.body, "M"))
})