console.log("Programa iniciado")

const timeoutId = setTimeout(() => {
  console.log("3 Segundos desde que o programa foi iniciado")
}, 3000) // Tempo em milisegundos // Também é possível usar cálculos. EX: 1000 * 60 * 10 (10 minutos)

clearTimeout(timeoutId)

let seconds = 0

const timeIntervalId = setInterval(() => {
  seconds += 1
  console.log(`Se passaram ${seconds} segundos`)
  if (seconds > 30) {
    clearInterval(timeIntervalId)
    console.log("Tempo esgotado! Encerrando")
  }
}, 1000)