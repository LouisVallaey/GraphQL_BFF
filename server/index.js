const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const CustomerAPI = require("../datasources/customer");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    customerAPI: new CustomerAPI(),
  }),
});
server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000`);
});
