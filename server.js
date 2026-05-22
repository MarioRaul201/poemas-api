const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/graphql/typeDefs/index');
const resolvers = require('./src/graphql/resolvers/index');
require('dotenv').config();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Servidor en ${url}`);
});