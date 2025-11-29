import { useContext } from "react";
import { HistoryScreenContext } from "../services/registrador_metadados";


/* Função que Calcula os Juros Simples */
function JurosSimples(valorinicial_str, taxa_str, tempo_str) {
  const valor_inicial = parseFloat(valorinicial_str);
  const taxa = parseFloat(taxa_str);
  const tempo = parseFloat(tempo_str);

  const erro_calculo = 'Erro: Valores inválidos.'

  if (isNaN(valor_inicial) || isNaN(taxa) || isNaN(tempo)) {
    console.log(erro_calculo);
    console.log(valor_inicial);
    console.log(taxa);
    console.log(tempo);
    return null;
  }

  const jurossimples_calculado = (valor_inicial * taxa* tempo) / 100;
  const montante_simples = valor_inicial + jurossimples_calculado;

  console.log("\n");
  console.log("Valor Inicial: %d", valor_inicial);
  console.log("Juros Simples: %d", jurossimples_calculado);
  console.log("Montante: %d", montante_simples);

  return { valor_inicial, jurossimples_calculado, montante_simples };
}


/* Função que Calcula os Juros Compostos */
function JurosComposto(valorcapital_str, taxa_str, tempo_str) {
  const valor_capital = parseFloat(valorcapital_str);
  const taxa_mensal = parseFloat(taxa_str);
  const tempo_mensal = parseFloat(tempo_str);

  const erro_calculo_composto = 'Erro ao Calcular os Juros Compostos\nValores Inválidos.';

  if (isNaN(valor_capital) || isNaN(taxa_mensal) || isNaN(tempo_mensal)){
    console.log(erro_calculo_composto);
    console.log(valor_capital);
    console.log(taxa_mensal);
    console.log(tempo_mensal)
    return null;
  }

  const valor_montante = valor_capital * (1 + (taxa_mensal / 100)) ** tempo_mensal;

  const juroscomposto_calculado = valor_montante - valor_capital;

  console.log("\n");
  console.log("Capital Investido: %d", valor_capital);
  console.log("Juros Composto: %d", juroscomposto_calculado);
  console.log("Montante: %d", valor_montante);

  return { valor_capital, juroscomposto_calculado, valor_montante };
};

export default JurosSimples;
export {JurosComposto};