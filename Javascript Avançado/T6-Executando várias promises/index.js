function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Parâmetros têm que ser números")
    } else {
      resolve(a + b)
    }
  })
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Parâmetros têm que ser números")
    } else {
      resolve(a - b)
    }
  })
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
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number') {
      reject("Parâmetro inválido")
    } else {
      resolve(x * x)
    }
  })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
  console.log(squares)
}).catch(err => {
  console.log(err)
})