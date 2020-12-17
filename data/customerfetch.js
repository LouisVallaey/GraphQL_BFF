const fetch = require("node-fetch");

const url = "http://192.168.0.243:3000/customers";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (customerdata) {
    console.log(customerdata);
  });
