## Question 1: ajout d'un nouveau podcast

```curl
curl -X POST  http://localhost:3000/podcasts \
-H "Content-Type: application/json" \
-d '{
    "index": 0,
    "name": "STAY AT HOME",
    "status": "Ongoing",
    "listeners": 101010,
    "picture": "http://placehold.it/320x320",
    "about": "Sit occaecat est laboris veniam laboris enim. Quis veniam ad reprehenderit anim incididunt tempor velit. Adipisicing sunt nulla cillum do deserunt. Enim aliquip consectetur do sit cillum velit magna elit ullamco cillum excepteur deserunt laboris commodo. Sint sint fugiat id anim. Quis laborum ipsum dolor fugiat culpa nostrud do et nisi aliquip velit irure aute.",
    "releaseDate": "Saturday, November 5, 2019 11:20 AM",
    "category": "series",
    "hosts": [
    {
        "id": 0,
        "name": "Abdallah Lotfi"
    }
    ]
}
'
```

## Question 2: mettre à jour le podcast, en utilisant son ID 'PATCH /podcasts/:id'

```curl
curl -X PATCH http://localhost:3000/podcasts/_jmMQtR \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d '{"status": "Completed"}'
```

## Question 3: commande curl pour afficher seulement l'entete HTTP

*-s or --silent* Silent mode.
*-I or HEAD* sends a HEAD request 

cette commande affiche tous les entêtes
```curl
curl -sI localhost:3000
```

pour afficher juste l'entête HTTP (200 OK, 400 Bad Request ..etc), on utilise la commande *sed* pour filtrer le résultat précédent
```curl
curl -sI localhost:3000 | sed -En 's/^HTTP\/1.1 (.*)/\1/p'
```