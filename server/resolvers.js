module.exports = {
  Query: {
    customers: (_, __, { dataSources }) =>
      dataSources.customerAPI.getAllCustomers(),
    customer: (_, { id }, { dataSources }) =>
      dataSources.customerAPI.getCustomerById(id),
  },
  Mutation: {
    addCustomer: async (_, { firstName, lastName, email }, { dataSources }) => {
      const result = await dataSources.customerAPI.addCustomer(
        firstName,
        lastName,
        email
      );

      return {
        success: true,
        message: "succesfully added new customer",
        customers: [result],
      };
    },
    updateCustomer: async (
      _,
      { id, firstName, lastName, email },
      { dataSources }
    ) => {
      const result = await dataSources.customerAPI.updateCustomer(
        id,
        firstName,
        lastName,
        email
      );

      return {
        success: true,
        message: "succesfully updated customer " + result.id,
        customers: [result],
      };
    },
    deleteCustomer: async (_, { id }, { dataSources }) => {
      const result = await dataSources.customerAPI.deleteCustomer(id);

      return {
        success: true,
        message: "succesfully deleted customer ",
        customers: [result],
      };
    },
  },
};
