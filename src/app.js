const { ApolloServer } = require("apollo-server");

const PORT = 3500;

// Initial Fake Data soon to be removed

const { resolvers } = require("../schema/resolvers");
const { typeDefs } = require("../schema/typedefs");

const PGQLServer = new ApolloServer({ typeDefs, resolvers });

PGQLServer.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
