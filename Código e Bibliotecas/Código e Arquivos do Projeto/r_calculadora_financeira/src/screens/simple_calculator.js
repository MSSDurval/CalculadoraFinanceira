import * as React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from '../styles/global_styles'
import Botoes_Principais from '../components/buttons';


function SimpleCalculatorScreen({navigation}) {
    return (
        <View style={styles.container_jurossimples}>

            <View style={styles.container_titulo}>
                <Text style={styles.titulo_principal}>Juros Simples</Text>
            </View>

            <label>
                <text style={styles.text_labels}>Valor Inicial (R$): </text>
                <input style={styles.input_fields} />
            </label>

            <Botoes_Principais 
            onPress={() => navigation.navigate('Inicio')}
            title='Ir para o Início'>
            </Botoes_Principais>

            <Botoes_Principais 
            onPress={() => navigation.navigate('Juros Compostos')}
            title="Ir para Juros Compostos">
            </Botoes_Principais>

            <Botoes_Principais
            onPress={() => navigation.navigate('Histórico')}
            title="Ir para Histórico">
            </Botoes_Principais>

        </View>
    );
}


export default SimpleCalculatorScreen;