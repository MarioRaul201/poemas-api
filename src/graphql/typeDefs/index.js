const { gql } = require('apollo-server');
module.exports = gql`
  type Poet {
    poet_code: Int
    first_name: String
    surname: String
    address: String
    postcode: String
    telephone_number: String
  }
  type Poem {
    poem_code: Int
    poem_title: String
    poem_contents: String
    poet_code: Int
  }
  type Customer {
    customer_code: Int
    first_name: String
    surname: String
    address: String
    postcode: String
    telephone_number: String
  }
  type Sale {
    sale_code: Int
    date: String
    amount: Float
    customer_code: Int
  }
  type Publication {
    publication_code: Int
    title: String
    price: Float
  }
  type PoetPoem {
    first_name: String
    surname: String
    poem_title: String
  }
  type Query {
    poets: [Poet]
    poems: [Poem]
    customers: [Customer]
    poetPoems: [PoetPoem]
    getPoetByName(first_name:String): [Poet]
  }
  type Mutation {
    # Altas
    addPoet(first_name: String, surname: String, address: String, postcode: String, telephone_number: String): String
    addPoem(poem_title: String, poem_contents: String, poet_code: Int): String
    addCustomer(first_name: String, surname: String, address: String, postcode: String, telephone_number: String): String
    addSale(date: String, amount: Float, customer_code: Int): String
    # Modificaciones
    updateCustomer(customer_code: Int, address: String, telephone_number: String): String
    updatePublication(publication_code: Int, title: String, price: Float): String
    updateSale(sale_code: Int, amount: Float): String
    # Bajas
    deletePoemPublication(poem_code: Int, publication_code: Int): String
    deleteSalePublication(sale_code: Int, publication_code: Int): String
  }
`;