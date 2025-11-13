import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../styles/global_styles'
import Botoes_Principais from '../components/buttons';

function HistoryScreen({navigation}) {
    return (
        <View style={styles.container_tab}>

            <View style={styles.container_titulo}>
                <Text style={styles.titulo_principal}>Histórico</Text>
            </View>

            <Botoes_Principais 
            onPress={() => navigation.navigate('Inicio')}
            title='Ir para o Início'>
            </Botoes_Principais>

        </View>
    );
}

export default HistoryScreen;