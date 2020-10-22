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

var { graphqlHTTP } = require('express-graphql');
var { buildSchema, GraphQLSchema, GraphQLObjectType,GraphQLString,GraphQLList,GraphQLInt } = require('graphql');

const Product = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
      id: {type: GraphQLString},
      name: {type: GraphQLString},
      weight: {type: GraphQLString},
      brand: {type: GraphQLString},
      sku: {type: GraphQLString},
      stock: {type: GraphQLInt},
      price: {type: GraphQLString},
      chargenumber: {type: GraphQLString},
      manufacturer: {type: GraphQLString}
    })
  })
  
const Shop = new GraphQLObjectType({
  name: "Shop",
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    products: {type: GraphQLList(GraphQLString)},
    createdAt: {type: GraphQLString},
    employees: {type: GraphQLInt},
    city: {type: GraphQLString},
    type: {type: GraphQLString}
  })
})

const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    shop: {
      type: Shop,
      args: {id: {type: GraphQLString}},
      resolve(parent,args) {
        return shops.find(s => s.id == args.id)
      }
    },
    shopProducts: {
        type: GraphQLList(Product),
        args: {id: {type: GraphQLString}},
        resolve(parent,args) {
          const shopProducts = []
          shop = shops.find(s => s.id == args.id)
          for(productId of shop.products) {
            const shopProduct = products.find(p => p.id == productId)
            shopProducts.push(shopProduct)
          }
          return shopProducts
        }
    }
  })
})

const schema = new GraphQLSchema({
  query: Query
})


graphql.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

// Do not change this
rest.listen(process.env.PORT || 3000, () => { console.log("REST Server is running"); })
graphql.listen(process.env.PORT || 4000, () => { console.log("GraphQL Server is running"); });