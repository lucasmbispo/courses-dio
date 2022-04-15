// tipos primitivos

// boolean

var vOuF = false;
console.log(typeof(vOuF));

//number

numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'claudia';
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(typeof(funcao));

// como declarar

var variavel = 'diana';
variavel = 'martine';
console.log(variavel);

let variavel2 = 'diana';
variavel2 = 'martine';
console.log(variavel2);

const constante = 'diana';
console.log(constante);





var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocalInterno = 'local';
  console.log(escopoLocalInterno);
}

escopoLocal();


// atribuição
var atribuicao ='diana';

//comparação
var comparacao = '0' == 0;
console.log(comparacao)

//comparação idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 1 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisao real
var divisao = 6 / 2;
console.log(divisao);

//divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 6 % 2;
console.log(divisaoInteira);

//potenciacao
var potenciacao = 2 ** 100;
console.log(potenciacao);

// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que
var menorQue = 5 > 2;
console.log(menorQue);

// maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);
