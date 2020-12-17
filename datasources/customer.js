const { RESTDataSource } = require("apollo-datasource-rest");

class CustomerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://192.168.0.243:3000/";
  }

  async getAllCustomers() {
    const response = await this.get("customers");
    console.log(response);
    return Array.isArray(response)
      ? response.map((customer) => this.customerReducer(customer))
      : [];
  }

  async getCustomerById(id) {
    const response = await this.get("customers/" + id);
    console.log(response);
    return this.customerReducer(response);
  }

  async addCustomer(firstName, lastName, email) {
    const response = await this.post("customers", {
      firstName,
      lastName,
      email,
    });
    return this.customerReducer(response);
  }

  async updateCustomer(id, firstName, lastName, email) {
    const response = await this.patch("customers/" + id, {
      firstName,
      lastName,
      email,
    });
    return this.customerReducer(response);
  }

  async deleteCustomer(id) {
    const response = await this.delete("customers/" + id);
    return response;
  }
  customerReducer(customer) {
    return {
      id: customer._id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      customerSince: customer.customerSince.toString(),
    };
  }
}

module.exports = CustomerAPI;
