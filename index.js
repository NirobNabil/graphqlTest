const { ApolloServer, gql } = require('apollo-server');

const { typeDefs } = require('./typedefs');
const { resolvers } = require('./resolvers');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});