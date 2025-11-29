import * as React from 'react';
import { useState } from "react";
import { View, Text, TextInput, ScrollView } from 'react-native';

import { Registrador } from '../services/registrador_metadados';
import styles from '../styles/global_styles';
import Botoes_Principais, { Botoes_Secundarios } from '../components/buttons';
import JurosSimples from '../services/calcule_module';

function SimpleCalculatorScreen({ navigation }) {

    const { AdicionaRegistro } = Registrador;

    const [ValorInicial, setValorInicial] = useState('');
    const [TaxaJuros, setTaxaJuros] = useState('');
    const [PeriodoTempo, setPeriodoTempo] = useState('');
    const [ResultadoSimples, setResultadoSimples] = useState(null);
    const [ErroCalculo, setErroCalculo] = useState('');

    function CalcularJurosSimples() {
        const resultado = JurosSimples(ValorInicial, TaxaJuros, PeriodoTempo);
        if (resultado === null) {
            setErroCalculo("Erro: Preencha todos os campos corretamente.");
            setResultadoSimples(null);
            return;
        }

        setErroCalculo('');
        setResultadoSimples(resultado);
    }

    function LimparCampos_simples() {
        setValorInicial('');
        setTaxaJuros('');
        setPeriodoTempo('');
        setResultadoSimples(null);
    }

    return (
        <View style={styles.container_tabnavigator}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container_juros}>

                    {/* -------------------- TÍTULO (1div) -------------------- */}
                    <View style={styles.div_titulo_principal}>
                        <Text style={styles.titulo_principal}>Juros Simples</Text>
                    </View>

                    {/* -------------------- BOTÕES PRINCIPAIS (1div) -------------------- */}
                    {/* <View style={styles.div_botoes_principais}>
                        <Botoes_Principais
                            onPress={() => navigation.navigate('Inicio')}
                            title="Ir para o Início"
                        />

                        <Botoes_Principais
                            onPress={() => navigation.navigate('Juros Compostos')}
                            title="Ir para Juros Compostos"
                        />

                        <Botoes_Principais
                            onPress={() => navigation.navigate('Histórico')}
                            title="Ir para Histórico"
                        />
                    </View> */}


                    {/* VALORES DE ENTRADA (3divs)*/}
                    <View style={styles.div_valores}>
                        <Text style={styles.text_labels_valores}>Valor Inicial (R$):</Text>
                        <TextInput
                            value={ValorInicial}
                            onChangeText={setValorInicial}
                            style={styles.input_fields_valores}
                            keyboardType="numeric"/>
                    </View>
                    
                    <View style={styles.div_valores}>
                        <Text style={styles.text_labels_valores}>Taxa de Juros (%):</Text>
                        <TextInput
                            value={TaxaJuros}
                            onChangeText={setTaxaJuros}
                            style={styles.input_fields_valores}
                            keyboardType="numeric"/>
                    </View>

                    <View style={styles.div_valores}>
                        <Text style={styles.text_labels_valores}>Prazo (Meses):</Text>
                        <TextInput
                            value={PeriodoTempo}
                            onChangeText={setPeriodoTempo}
                            style={styles.input_fields_valores}
                            keyboardType="numeric"/>
                    </View>

                    {/* Alertas de Erro: */}
                    {ErroCalculo !== '' && (
                        <View style={styles.div_alerta}>
                            <Text style={styles.text_alerta}>
                                {ErroCalculo}
                            </Text>
                        </View>
                    )}

                    {/* -------------------- BOTÕES (1div): -------------------- */}
                    <View style={styles.div_botao_calcular}>
                        <Botoes_Secundarios
                            onPress={CalcularJurosSimples}
                            title="Calcular"
                            style={styles.botoes_segundarios}
                        />

                        <Botoes_Secundarios
                        onPress={LimparCampos_simples}
                        title="Limpar"
                        style={styles.botoes_segundarios}
                        />

                    </View>

                    {/* -------------------- RESULTADOS (2divs) -------------------- */}
                    <View style={styles.div_resultado}>
                        <View style={styles.campos_resultados}>
                            <Text style={styles.text_campos_resultados}>Valor Investido:</Text>
                            {ResultadoSimples && (
                                <Text style={styles.text_div_resultado}>{ResultadoSimples.valor_inicial.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                })}</Text>
                            )}
                         </View>

                        <View style={styles.campos_resultados}>
                            <Text style={styles.text_campos_resultados}>Juros Calculado:</Text>
                            {ResultadoSimples && (
                                <Text style={styles.text_div_resultado}>
                                    {ResultadoSimples.jurossimples_calculado.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                        })}
                                </Text>
                            )}
                        </View>
                    </View>

                    <View style={styles.div_resultado}>
                        <View style={styles.campos_resultados}>
                            <Text style={styles.text_campos_resultados}>Total Acrecido de Juros:</Text>
                            {ResultadoSimples && (
                                <Text style={styles.text_div_resultado}>
                                    {ResultadoSimples.montante_simples.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                        })}
                                </Text>
                            )}
                        </View>

                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default SimpleCalculatorScreen;
