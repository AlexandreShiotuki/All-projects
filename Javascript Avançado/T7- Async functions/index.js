async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Parâmetros têm que ser números")
  }
  return a + b
}

async function asyncSubtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Parâmetros têm que ser números")
  }
  return a - b
}

const sumResult = asyncSum(50, 14)                             // Armazenar as async functions em uma variável
const subtractResult = asyncSubtract(50, 3)                    // Armazenar as async functions em uma variável

Promise.all([sumResult ,subtractResult]).then(results => {     // Objeto global PROMISE, encadear no all e usar 
  console.log(results)                                         // uma array de promises como parâmetro
}).catch(err => {                                               
  console.log(err)                                             // Se uma promise falhar, todas falharão
})     

const numbers = [4, 5, 10, 40, 13, 32]

function asyncSquare(x) {
  if (typeof x !== "number") {
    return Promise.reject("Parâmetro inválido")
  }
  return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
  console.log(squares)
}).catch(err => {
  console.log(err)
})