function imcCalculate(weight, height) {
  return new Promise((resolve, reject) => {
    console.log("Iniciando cálculo");
    if (typeof weight !== "number" || typeof height !== "number") {
      reject(`Os parâmetros precisam ser em números`)
    } else {
      resolve(weight / (height * height))
    }
  })
}

function showImc(weight, height) {
  imcCalculate(weight, height).then((result) => {
    console.log(`O resultado do IMC foi de ${result}`)

    if (result < 18.5) console.log(`Situação: Magreza`)
    else if (result < 25) console.log(`Situação: Normal`)
    else if (result < 30) console.log(`Situação: Sobrepeso`)
    else if (result < 40) console.log(`Situação: Obesidade`)
    else (`Situação: Obesidade grave`)
  }).catch((err) => {
    console.log(err)
  })
  console.log("Código rodando enquanto resolve a promise")
  console.log("Código rodando enquanto resolve a promise")
  console.log("Código rodando enquanto resolve a promise")
  console.log("Código rodando enquanto resolve a promise")
  console.log("Código rodando enquanto resolve a promise")
}

showImc(71, 1.40)
showImc(27, "definitivamente não sou um erro proposital")
showImc(46, 1.90)
showImc(120, 1.95)