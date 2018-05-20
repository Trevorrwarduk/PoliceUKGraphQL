const fetch = require("node-fetch");

const policeURL = process.env.POLICEURL;

const resolvers = {
  Query: {
    forces: () => {
      return fetch(`${policeURL}/forces`)
        .then(res => res.json())
        .catch(err => {
          return "ERROR";
        });
    },
    force: (parent, args) => {
      const { id } = args;
      return fetch(`${policeURL}/forces/${id}`)
        .then(res => res.json())
        .catch(err => {
          return "ERROR";
        });
    },
    seniorofficers: (parent, args) => {
      const { id } = args;
      return fetch(`${policeURL}/forces/${id}/people`)
        .then(res => res.json())
        .catch(err => {
          console.log(err);
          return "ERROR";
        });
    },
    force_neighbourhoods: (parent, args, context) => {
      const { id } = args;
      return fetch(`${policeURL}/${id}/neighbourhoods`)
        .then(res => res.json())
        .catch(err => {
          return "ERROR";
        });
    },
    force_neighbourhood: (parent, args, context) => {
      const { id, forceID } = args;
      return fetch(`${policeURL}/api/${forceID}/${id}`)
        .then(res => res.json())
        .catch(err => {
          return "ERROR";
        });
    },
    force_neighbourhood_boundary: (parent, args, context) => {
      const { id, forceID } = args;
      return fetch(`${policeURL}/api/${forceID}/${id}/boundary`)
        .then(res => res.json())
        .catch(err => {
          return "ERROR";
        });
    }
  }
};

exports.resolvers = resolvers;
