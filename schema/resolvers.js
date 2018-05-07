const fetch = require("node-fetch");

const policeURL = "https://data.police.uk/api";

const resolvers = {
  Query: {
    forces: () => {
      return fetch(`${policeURL}/forces`).then(res => res.json());
    }
  }
};

exports.resolvers = resolvers;
