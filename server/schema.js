const { gql } = require("apollo-server");

const typeDefs = gql`
  # Customers
  type Customer {
    id: ID
    firstName: String!
    lastName: String!
    email: String!
    customerSince: String
  }

  type Query {
    customers: [Customer]!
    customer(id: ID!): Customer
  }

  type Mutation {
    addCustomer(
      firstName: String!
      lastName: String!
      email: String!
    ): CustomerResponse!

    updateCustomer(
      id: ID!
      firstName: String
      lastName: String
      email: String
    ): CustomerResponse!

    deleteCustomer(id: ID!): CustomerResponse!
  }

  type CustomerResponse {
    success: Boolean!
    message: String
    customers: [Customer]
  }
`;

module.exports = typeDefs;
