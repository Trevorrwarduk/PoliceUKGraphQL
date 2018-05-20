const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    forces: [Forces]
    force(id: ID!): Force
    seniorofficers(id: ID!): [seniorofficers]
    force_neighbourhoods(id: ID!): [force_neighbourhoods]
    force_neighbourhood(id: ID!, forceID: ID): force_neighbourhood
    force_neighbourhood_boundary(
      id: ID!
      forceID: ID
    ): [force_neighbourhood_boundary]
  }

  type Forces {
    id: ID
    name: String
  }

  type Force {
    id: ID
    name: String
    telephone: String
    url: String
    description: String
    engagement_methods: [engagement_method]
  }

  type engagement_method {
    url: String
    description: String
    title: String
  }

  type seniorofficers {
    name: String
    rank: String
    bio: String
    contact_detail: contact_detail
  }

  type contact_detail {
    email: String
    telephone: String
    mobile: String
    fax: String
    web: String
    address: String
    facebook: String
    twitter: String
    youtube: String
    myspace: String
    bebo: String
    flickr: String
    google_plus: String
    forum: String
    e_messaging: String
    blog: String
    rss: String
  }

  type force_neighbourhoods {
    id: ID
    name: String
  }

  type force_neighbourhood {
    id: ID
    population: Int
    url_force: String
    name: String
    links: [neighbourhood_links]
    centre: neighbourhood_centre
    locations: [neighbourhood_locations]
    description: String
  }

  type neighbourhood_links {
    url: String
    description: String
    title: String
  }

  type neighbourhood_centre {
    latitude: String
    longitude: String
  }

  type neighbourhood_locations {
    name: String
    latitude: String
    longitude: String
    postcode: String
    address: String
    type: String
    description: String
  }

  type force_neighbourhood_boundary {
    latitude: String
    longitude: String
  }
`;

exports.typeDefs = typeDefs;
