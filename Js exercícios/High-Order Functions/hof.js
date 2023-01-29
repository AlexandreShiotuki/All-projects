
const computadores = [
  {preço: 10000, ram: 16, placaVideo: "RTX 2080", cooler: 4, classe: "PC GAMER TOP"},
  {preço: 3000, ram: 4, placaVideo: "GTX 710", cooler: 1, classe: "PC GAMER BARATO"},
  {preço: 5000, ram: 8, placaVideo: "GTX 1060TI", cooler: 2, classe: "PC GAMER MÉDIO"},
  {preço: 19000, ram: 32, placaVideo: "RTX 3080", cooler: 6, classe: "MÁQUINA"},
  {preço: 4000, ram: 8, placaVideo: "GTX 960", cooler: 1, classe: "PC GAMER MÉDIO"},
  {preço: 6400, ram: 16, placaVideo: "GTX 1660", cooler: 3, classe: "PC GAMER EXCELENTE"},
  {preço: 62000, ram: 32, placaVideo: "Radeon RX 6900", processador: "AMD RYZEN THREADRIPPER PRO", cooler: 6, classe: "TROGLODITA SUPREMO"}
]


  // USANDO O MAP PARA SABER AS PLACAS DE VÍDEO DISPONÍVEIS

  const placaDeVideo = computadores.map (function (placas){
    return placas.placaVideo
  })
  console.log(placaDeVideo)


  // USANDO O FILTER PARA SABER QUANTOS PCS MÉDIOS EXISTEM 

  const classes = computadores.filter (function (nota) {
    return nota.classe === "PC GAMER MÉDIO"
  })
  console.log(classes)


  // USANDO O REDUCE PARA SOMAR O PREÇO DE TODOS OS COMPUTADORES
     
  const precoTotal = computadores.reduce (function (valorAcumulado, preço) { 
    return valorAcumulado + preço.preço 
  }, 0) 
  console.log(precoTotal)


  
  // USANDO REDUCE PARA SEPARAR OS OBJETOS EM CLASSES EM COMUM

  const classesComum = computadores.reduce(function (valorAcumulado, pc) {
    if (valorAcumulado[pc.classe]) {
      valorAcumulado[pc.classe].push(pc)
    } else {
      valorAcumulado[pc.classe] = [pc]
    }
    return valorAcumulado
  }, {})

  console.log(classesComum)

  // USANDO O SORTE PARA ORDENAR A ARRAY BASEADO NO PREÇO DOS COMPUTADORES
  // O SORT MODIFICA A ARRAY, NÃO CRIA UMA NOVA
  // O SORT COMPARA OS ELEMENTOS DE PAR EM PAR

  const computadoresOrdenados = computadores.slice().sort(function (a, b) {   // VAI FAZER UMA CÓPIA E SÓ DEPOIS O SORT IRÁ MODIFICAR
    return a.preço - b.preço
  })
  console.log(computadores)
  console.log(computadoresOrdenados)