import * as React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';

import styles from '../styles/global_styles'
import Botoes_Principais, { Botoes_Secundarios } from '../components/buttons';
import { JurosComposto } from '../services/calcule_module';


function ComposteCalculatorScreen({navigation}) {
    const [Valor_Capital, setValorCapital] = useState('');
    const [TaxaMensal, setTaxaMensal] = useState('');
    const [TempoMensal, setTempoMensal] = useState('');
    const [ResultadoComposto, setResutadoComposto] = useState(null);
    const [ErroCalculo_c, setErroCalculo_c] = useState('');

    function CalcularJurosCompostos(){
        const resultado_composto = JurosComposto(Valor_Capital, TaxaMensal, TempoMensal);
        if (resultado_composto === null) {
            setErroCalculo_c("Erro: Preencha todos os campos corretamente.");
            setResutadoComposto(null);
            return;
        }

        setErroCalculo_c('');
        setResutadoComposto(resultado_composto);
    }

    function LimparCampos_composto() {
        setValorCapital('');
        setTaxaMensal('');
        setTempoMensal('');
        setResutadoComposto(null);
    }

    return (
        <View style={styles.container_tabnavigator}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.container_juros}>
            
                            {/* Titulo Principal (1div)*/}
                            <View style={styles.div_titulo_principal}>
                                <Text style={styles.titulo_principal}>Juros Composto</Text>
                            </View>


                            {/* Botões Principais da Tela: (1div)*/}
                            {/* <View style={styles.div_botoes_principais}>
                                <Botoes_Principais 
                                onPress={() => navigation.navigate('Inicio')}
                                title='Ir para o Início'>
                                </Botoes_Principais>
            
                                <Botoes_Principais 
                                onPress={() => navigation.navigate('Juros Simples')}
                                title="Ir para Juros Simples">
                                </Botoes_Principais>
            
                                <Botoes_Principais
                                onPress={() => navigation.navigate('Histórico')}
                                title="Ir para Histórico">
                                </Botoes_Principais>
                            </View> */}
            
            
                            {/* Valores de Entrada (2divs) */}
                            <View style={styles.div_valores}>
                                <Text style={styles.text_labels_valores}>Valor Capital (R$):</Text>
                                <TextInput 
                                value={Valor_Capital}
                                onChangeText={setValorCapital}
                                style={styles.input_fields_valores} 
                                keyboardType='numeric' />
                            </View>

                            <View style={styles.div_valores}>
                                <Text style={styles.text_labels_valores}>Taxa Mensal (%):</Text>
                                <TextInput 
                                value={TaxaMensal}
                                onChangeText={setTaxaMensal}
                                style={styles.input_fields_valores} 
                                keyboardType='numeric' />
                            </View>
            
                            <View style={styles.div_valores}>
                                <Text style={styles.text_labels_valores}>Período de Tempo (em Meses):</Text>
                                <TextInput value={TempoMensal}onChangeText={setTempoMensal} style={styles.input_fields_valores} keyboardType='number-pad' />
                            </View>
                                
            
                            {/* Display da Calculadora Composta: */}

                            {/* Alertas de Erro: */}
                            {ErroCalculo_c !== '' && (
                                <View style={styles.div_alerta}>
                                    <Text style={styles.text_alerta}>
                                        {ErroCalculo_c}
                                    </Text>
                                </View>
                            )}

                             {/* -------------------- BOTÕES: (1div) -------------------- */}
                            <View style={styles.div_botao_calcular}>
                                <Botoes_Secundarios onPress={CalcularJurosCompostos}
                                title="Calcular"
                                style={styles.botoes_segundarios}></Botoes_Secundarios>

                                <Botoes_Secundarios
                                onPress={LimparCampos_composto}
                                title="Limpar"
                                style={styles.botoes_segundarios}
                                />
                            </View>
                            {/*------------------------------------------------------------*/}

                            
                            {/* -------------------- RESULTADOS (2divs) -------------------- */}
                            <View style={styles.div_resultado}>
                                <View style={styles.campos_resultados}>
                                    <Text style={styles.text_campos_resultados}>Capital Investido:</Text>
                                    {ResultadoComposto && (
                                        <Text style={styles.text_div_resultado}>{ResultadoComposto.valor_capital.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                        })}</Text>
                                    )}
                                </View>

                                <View style={styles.campos_resultados}>
                                    <Text style={styles.text_campos_resultados}>Juros Acumulados:</Text>
                                    {ResultadoComposto &&(
                                        <Text style={styles.text_div_resultado}>{ResultadoComposto.juroscomposto_calculado.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                        })}</Text>)}
                                </View>
                            </View>
                            <View style={styles.div_resultado}>
                                <View style={styles.campos_resultados}>
                                    <Text style={styles.text_campos_resultados}>Total com Juros:</Text>
                                    {ResultadoComposto && (
                                        <Text style={styles.text_div_resultado}>{ResultadoComposto.valor_montante.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                        })}</Text>)}
                                </View>
                            </View>
                            {/*---------------------------------------------------------------- */}
                        </View>
            </ScrollView>
        </View>
    );
}


export default ComposteCalculatorScreen;