var peso = window.prompt("Digite o peso da peça");
if(peso >=100){
    console.log("Peso da peça válido")
} else {
    console.log("Peso da peça inválido")
}
var Qtdepeça = window.prompt("Insira quantidade de peça");
var entradadepeças = window.prompt("Insira uma peça");
var ListaDePecas = [ListaDePecas = entradadepeças];
console.log("quantidade de pecas" + Qtdepeça);

if(ListaDePecas.length <=10){
    console.log('As peças já estão cadastradas');
} 

for (var i = 0; i < Qtdepeça; i ++){
   entradadepeças = window.prompt("Insira uma peça");
   ListaDePecas = [ListaDePecas = entradadepeças];
   console.log(ListaDePecas +'')
    var PecaAtual = ListaDePecas[i];
   
 if(entradadepeças.length < 4) {
      console.log(entradadepeças + ' Esta peça possui nome inferior a 4 caracteres! ')
    } else {
     console.log(entradadepeças + ' Está peça podera! Ser Cadastrada. ')
    }
}
