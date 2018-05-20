const { PGQLServer } = require("./app");

const PORT = process.env.PORT || 4000;

PGQLServer.listen(PORT).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
