//Tipos de Função

//Funções Declarativas

function funcao(){
  console.log('Sou uma mensagem de uma função declarativa')
}

funcao();

//Expressões de Funções com Nomeação
var funcao1 = function funcao1(){
  console.log('Sou uma mensagem de uma função de expressão')
}

funcao1();

//Expressões de Funções sem Nomeação
var funcao2 = function (){
  console.log('Sou uma mensagem de uma função de expressão')
}

funcao2();

//Arrow Function
var funcao3 = () => {
  console.log('Sou uma arrow function!');
}

funcao3();
