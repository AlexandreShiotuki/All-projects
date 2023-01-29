class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
      this.inStock += quantity
    }

    calculateDescount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}


const Produto = new Product("Chá para emagrecimento", "Chá muito bom", 1000)
Produto.addToStock(32)

const discount = Produto.calculateDescount(50)

console.log(Produto)
console.log(Produto.calculateDescount(90))