async function imcCalculate(weight, height) {
  console.log("Iniciando cálculo");
  if (typeof weight !== "number" || typeof height !== "number") {
    return Promise.reject(`Os parâmetros precisam ser em números`)
  } else return weight / (height * height)
}

async function showImc(weight, height) {
  try {
    console.log("Código rodando enquanto resolve a promise");
    console.log("Código rodando enquanto resolve a promise");
    
    const result = await imcCalculate(weight, height);

    console.log(`O resultado do IMC foi de ${result}`);

    if (result < 18.5) console.log(`Situação: Magreza`);
    else if (result < 25) console.log(`Situação: Normal`);
    else if (result < 30) console.log(`Situação: Sobrepeso`);
    else if (result < 40) console.log(`Situação: Obesidade`);
    else `Situação: Obesidade grave`;
    
  } catch (err) {
    console.log(err);
  }
}

showImc(71, 1.4);
showImc(27, "definitivamente não sou um erro proposital");
showImc(46, 1.9);
showImc(120, 1.95);
