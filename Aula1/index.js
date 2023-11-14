//declaração de variavel
var valorEmDolar = 78.90;
var cotacaoDolar = 5.32;
var valorEmReal = valorEmDolar * cotacaoDolar;

//concatenação e redução das casas decimais
valorEmReal = ("R$" + valorEmReal.toFixed(2));

//print
console.log(valorEmReal);
