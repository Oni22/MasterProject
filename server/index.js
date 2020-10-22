// This project is using express.js for building the apis
// about express: https://www.npmjs.com/package/express
const express = require("express");
const rest = express();
const graphql = express();
//Shops db and products db
var { shops, products } = require('./db')
var cors = require('cors')

rest.use(cors())
rest.use(express.json())
graphql.use(cors())
graphql.use(express.json())

//-----------------REST API-----------------------------
// Implement the REST API
// tutorial for REST: https://www.youtube.com/watch?v=fgTGADljAeg




//-----------------GRAPHQL API-----------------------------
// Implement the GraphQL API
// you can use localhost:4000/graphql for testing if you enable graphiql
// tutorial for graphQL: https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=1



// Do not change this
rest.listen(process.env.PORT || 3000, () => { console.log("REST Server is running"); })
graphql.listen(process.env.PORT || 4000, () => { console.log("GraphQL Server is running"); });