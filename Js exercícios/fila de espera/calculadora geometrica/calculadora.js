let triangleBase, triangleHeight = 0  // BASE E ALTURA DO TRIÂNGULO
let rectangleBase, rectangleHeight = 0  //  BASE E ALTURA DO RETÂNGULO
let square, squareSide = 0  // LADO DO QUADRADO
let trapezeBB, trapezeSB, trapezeHeight  = 0 // BASE MAIOR, MENOR E ALTURA DO TRAPEZIO
let circleRadius = 0  // RAIO DO CÍRCULO
const pi = 3.14

function triangleArea (triangleBase, triangleHeight) {
  return triangleBase * triangleHeight / 2
}

function rectangleArea (rectangleBase, rectangleHeight) {
  return rectangleBase * rectangleHeight
}

function squareArea (squareSide) {
  return squareSide * squareSide
}

function trapezeArea (trapezeBB, trapezeSB, trapezeHeight) {
  return (trapezeBB + trapezeSB) * trapezeHeight / 2
}

function circleArea (pi, circleRadius) {
  return pi * (circleRadius * circleRadius)
}

let opcao 
do {
  opcao = parseFloat(prompt("Qual forma geométrica você gostaria de calcular a área? (cm²)" +
  "\n1.Área do triângulo\n2.Área do retângulo\n3.Área do quadrado\n4.Área do trapézio\n5.Área do círculo\n6. Sair"))
 
  switch(opcao) {

    case 1:
      triangleBase = parseFloat(prompt("Qual é a base do triângulo?")) 
      triangleHeight = parseFloat(prompt("Qual é a altura do triângulo?")) 
      alert("A área do triângulo é de " + triangleArea(triangleBase, triangleHeight) + "cm²")
      break;

     case 2:
       rectangleBase = parseFloat(prompt("Qual é a base do retângulo?"))
       rectangleHeight = parseFloat(prompt("Qual é a altura do retângulo?"))
       alert("A área do retângulo é de " + rectangleArea(rectangleBase, rectangleHeight) + "cm²")
       break;

    case 3:
       squareSide = parseFloat (prompt("Qual é o lado do quadrado?"))
       alert("A área do quadrado é de " + squareArea(squareSide) + "cm²")
       break;

    case 4:
       trapezeBB = parseFloat (prompt("Qual é o tamanho da base maior?"))
       trapezeSB = parseFloat (prompt("Qual é o tamanho da base menor?"))
       trapezeHeight = parseFloat (prompt("Qual é a altura do trapezio?"))
       alert("A área do trapézio é " + trapezeArea(trapezeBB, trapezeSB, trapezeHeight) + "cm²")
       break;

    case 5:
        circleRadius = parseFloat(prompt("Qual é o raio do círculo?"))
        alert("A área do círculo é de " + circleArea(pi, circleRadius) + "cm²") 
        break;
 
    case 6:
        alert("Programa finalizado")
        break;
  }

} while (opcao != 6)
  