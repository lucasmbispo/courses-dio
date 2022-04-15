function calculadora() {
  const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma(+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão real (/) \n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

  if (!operacao || operacao >= 7) {
    alert('Erro - operação inválida!');
    calculadora();
  } else {

    let n1 = Number(prompt('Insira o primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;

    if(!n1 || !n2) {
      alert('Erro - parâmetros inválidos!');
      calculadora();
      } else {

      function somax(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subtracaox(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacaox(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaointeirax(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaorealx(){
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);novaOperacao();

      }

      function potenciacaox(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim \n 2 - Não');

        if (opcao == 1){
          calculadora();
        } else if (opcao == 2) {
          alert('Até mais!');
        } else {
          alert('Digite uma opção válida!');
          novaOperacao();
        }

      }

      /*if (operacao == 1) {
        somax();
      } else if (operacao == 2) {
        subtracaox();
      } else if (operacao == 3) {
        multiplicacaox();
      } else if (operacao == 4) {
        divisaointeirax();
      } else if (operacao == 5) {
        divisaorealx();
      } else if (operacao == 6) {
        potenciacaox();
      }
      */
      switch (operacao) {
        case 1:
          somax();
          break;
        case 2:
          subtracaox();
          break;
        case 3:
          multiplicacaox();
          break;
        case 4:
          divisaorealx();
          break;
        case 5:
          divisaointeirax();
          break;
        case 6:
          potenciacaox();
          break;
      }
    }
  }
}

calculadora();


