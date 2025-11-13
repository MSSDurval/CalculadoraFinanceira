import React from 'react';
import { View, Text } from 'react-native'; 

import styles from '../styles/global_styles'
import Botoes_Principais from '../components/buttons';
import Calcule_Module from '../components/calcule_module';

export default function HomeScreen({navigation}) {
    return (
    <View style={styles.container_tab}>

        <View style={styles.container_titulo}>
            <Text style={styles.titulo_principal}>Tela Principal</Text>
        </View>

        <Botoes_Principais 
        onPress={() => navigation.navigate('Juros Simples')}
        title='Ir para Juros Simples'>
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
