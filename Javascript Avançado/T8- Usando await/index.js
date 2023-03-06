async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Parâmetros têm que ser números")
  }
  return a + b
}

// async function execute() {
//   asyncSum(50, 33).then(result => {
//     console.log(result)
//   })
// }

async function execute() {
  try {
    const result = await asyncSum(50, 33) // O await TRAVA o código até que a promise seja concluída
    console.log(result)
  } catch (err) {
    console.log(err)
  }
  // Vários procedimentos
  //
  //
}

execute()