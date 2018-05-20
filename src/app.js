const { ApolloServer } = require("apollo-server");

const { resolvers } = require("../schema/resolvers");
const { typeDefs } = require("../schema/typedefs");

const PGQLServer = new ApolloServer({ typeDefs, resolvers });

exports.PGQLServer = PGQLServer;
