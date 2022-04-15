/* Estruturas e Condições*/


var jogador1 = 3;
var jogador2 = 0;
var placar;

/*if else*/


  if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
  } else if(jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto!');
    placar = jogador1 < jogador2;
  } else {
    console.log('Ninguém marcou ponto.');
  }

/*console.log('Valor negativo')*/

/* if-else ternário */
jogador1 != -1 && jogador2 != -1 ? console.log('Jogadores Válidos') : console.log('Jogadores Inválidos');

/*switch-case*/

switch(placar){
  case placar = jogador1 > jogador2:
    console.log('jogador1 ganhou');
    break;
  case placar = jogador1 < jogador2:
    console.log('jogador2 ganhou');
    break;
    default: console.log("Ninguém ganhou");
}

let array =['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// for - executa instrução até que ela seja falsa

for(let indice = 0; indice < array.length; indice++ ) {
  console.log(indice);
}

/* for/in executa repetição a partir de uma propiedade */

/* com array*/
for (let i in array) {
  console.log(i);
}

/* com objeto*/
for (i in object) {
  console.log(i);
}

/* For of executa a repetição a partir de um valor */

/* com array*/
for (i of array) {
  console.log(i);
}

/*com objeto (não iterável)*/
for (i of object.propriedade1) {
  console.log(i);
}

/* While executa uma instrução enquanto determinada condição for verdadeira */

var a = 0
while (a < 10){
  a++;
  console.log(a);
}

/* Do While executa uma instrução até que determinada condição seja falsa*/

do{
  a++;
  console.log(a);
} while (a<10)
