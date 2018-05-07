const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    forces: [Forces]
  }

  type Forces {
    id: ID!
    name: String
  }
`;

exports.typeDefs = typeDefs;
