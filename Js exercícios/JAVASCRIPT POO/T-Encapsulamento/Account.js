class Account {
  #password
  #balance = 0
  constructor(user) {
    this.email = user.email
    this.#password = user.password
  }

  getBalance(email, password) {
    if (this.email === email && this.#password === password) {
      return this.#balance
    } else {
      return null
    }
  }
}

const user = {
  email: "alexandreshiotuki@gmail.com",
  password: "123456"
}

const MyAccount = new Account(user)

console.log(MyAccount)
console.log(MyAccount.getBalance("alexandreshiotuki@gmail.com", "123456"))