const Address = require('./Address')
const Person = require('./Person')

const addr = new Address ("7 de setembro", 99, "Centro", "Marília", "SP")
const John = new Person ("John Doe", addr)

console.log(John)
console.log(John.address.fullAddress())