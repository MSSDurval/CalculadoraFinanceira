import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../styles/global_styles'
import Botoes_Principais from '../components/buttons';

function ComposteCalculatorScreen({navigation}) {
    return (
        <View style={styles.container_juroscompostos}>

            <View style={styles.container_titulo}>
                <Text style={styles.titulo_principal}>Juros Compostos</Text>
            </View>

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
            title="Ir para o Histórico">
            </Botoes_Principais>

        </View>
    );
}


export default ComposteCalculatorScreen;