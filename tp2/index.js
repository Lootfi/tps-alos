var unirest = require("unirest")

patching()

function patching() {
    unirest
        .put("http://localhost:3000/clients")
        .headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        .send({
            "age": 30,
            "name": {
                "first": "Riad",
                "last": "Mahrez"
            },
            "company": "GEANT",
            "email": "riad.mahrez@geant.dz",
            "id": "BY1lNlds"
        })
        .then(res => {
            if (res.error) console.log(res.error)
            console.log(res.body)
        })
}

function posting() {
    unirest
        .post("http://localhost:3000/clients")
        .headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        .send({
            "age": 30,
            "name": {
                "first": "Riad",
                "last": "Mahrez"
            },
            "company": "GEANT",
            "email": "riad.mahrez@geant.dz"
        })
        .then(res => {
            if (res.error) throw new Error(res.error)
            console.log(res.body)
        })
}