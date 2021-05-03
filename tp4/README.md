## Folder Structure

```bash
├───build
├───database
└───src
│    ├───api
│    │   ├───v1
│    │   │   └───router.js
│    │   └───v2
│    │       └───router.js
│    ├───utils
│    └───index.js
└───.babelrc 
```

the */src* folder is where my ES6 code lies.
I will put all my utilities under the */src/utils* folder.

*babel* compiles my code from ES6 --> ES5 into a */build* folder

the */database* folder will contain all my json files

## How to Run

Install the dependencies
```bash
npm install
or
yarn install
```

Start the babel compiler:
```bash
npm run start-babel
or
yarn start-babel
```

In a separate console window, let nodemon watch for file changes:
```bash
npm run watch
or
yarn watch
```

## API Versioning

### v1

The first version only queries podcasts and hosts.

### v2

In the second version, you can query users and their reviews, in addition to everything in v1.
On top of that, v2 offers authentification and authorization to all routes.

#### Authentification
You can use */api/auth/register* to register a user account

And */api/auth/login* to login to your existing account

All *v2* routes will check for the *access-token* header, no prefixes.


