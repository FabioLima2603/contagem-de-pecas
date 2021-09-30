var peso = window.prompt("Digite o peso da peça");
if(peso >=100){
    console.log("Peso da peça válido")
} else {
    console.log("Peso da peça inválido")
}
var entradadepeças = window.prompt("Insira uma peça");
var ListaDePecas = [ListaDePecas = entradadepeças];
console.log("Quantidade de peças: " + ListaDePecas)

if(ListaDePecas.length <=10){
    console.log('As peças já estão cadastradas');
} 

for (var i = 0; i < ListaDePecas.length; i ++){
    var PecaAtual = ListaDePecas[i];
    if(PecaAtual.length < 4) {
        console.log(PecaAtual + ' Esta peça possui nome inferior a 4 caracteres! ')
    } else {
        console.log(PecaAtual + ' Está peça podera! Ser Cadastrada. ')
    }
}