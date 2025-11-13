import * as React from 'react';

const menu_inicial = () => {
  console.log("Escolha o tipo de cálculo de juros:");
  console.log("1 - Juros Simples");
  console.log("2 - Juros Compostos");
  console.log("3 - Sair");
};

const juros_simples = (capital, taxa, tempo) => {
  juros = (capital * taxa * tempo) / 100;
  montante = capital + juros;
  return { juros, montante };
};

const juros_compostos = (capital, taxa, tempo) => {
  montante = capital * (1 + (taxa / 100)) ** tempo;
  juros = montante - capital;
  return { juros, montante };
};

const captura_escolha = () => {
  while (true) {
    menu_inicial();
    opcao = InputEvents.getInput("Digite a opção desejada: ");

    if (opcao == 3) {
      console.log("Encerrando o programa.");
      break;
   }
   capital = parseFloat(InputEvents.getInput("Digite o capital inicial: "));
   taxa = parseFloat(InputEvents.getInput("Digite a taxa de juros (%): "));
   tempo = parseFloat(InputEvents.getInput("Digite o tempo (em períodos): "));

    if (opcao == 1) {
      resultado = juros_simples(capital, taxa, tempo);
      console.log(`Juros Simples: R$ ${resultado.juros.toFixed(2)}`);
      console.log(`Montante: R$ ${resultado.montante.toFixed(2)}`);
    } else if (opcao == 2) {
      resultado = juros_compostos(capital, taxa, tempo);
      console.log(`Juros Compostos: R$ ${resultado.juros.toFixed(2)}`);
      console.log(`Montante: R$ ${resultado.montante.toFixed(2)}`);
    } else {
      console.log("Opção inválida. Tente novamente.");
    }
 }
};

export default captura_escolha;
