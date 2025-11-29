import React from 'react';
import { View, Text } from 'react-native'; 

import styles from '../styles/global_styles';
import Botoes_Principais from '../components/buttons';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container_tabnavigator}>
            <View style={styles.container_homescreen}>

                <View style={styles.div_titulo_principal}>
                    <Text style={styles.titulo_principal}>Calculadora Financeira</Text>
                    <Text style={styles.text_subtitulo}>
                        Simule juros simples e compostos de forma rápida e prática.
                    </Text>
                </View>

                <View style={styles.div_apresentacao}>
                    <Text style={styles.card_apresentacao}>
                        Escolha abaixo o tipo de cálculo que deseja realizar:
                    </Text>
                </View>

                <View style={styles.div_botoes_principais}>
                    <Botoes_Principais 
                        onPress={() => navigation.navigate('Juros Simples')}
                        title='Juros Simples'
                    />

                    <Botoes_Principais 
                        onPress={() => navigation.navigate('Juros Compostos')}
                        title='Juros Compostos'
                    />

                    {/* <Botoes_Principais
                        onPress={() => navigation.navigate('Histórico')}
                        title="Histórico de Cálculos"
                    /> */}
                </View>

            </View>
        </View>
    );
}
