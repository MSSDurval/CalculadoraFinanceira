import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/global_styles';
import Botoes_Principais from '../components/buttons';
import { HistoryContext } from '../services/registrador_metadados';

function HistoryScreen({ navigation }) {
  const { historico } = useContext(HistoryContext);

  return (
    <View style={styles.container_tabnavigator}>
      <View style={styles.container_historico}>

        {/* Título fora do map */}
        <View style={styles.div_titulo_principal}>
          <Text style={styles.titulo_principal}>Histórico</Text>
        </View>

        <ScrollView style={{ padding: 20 }}>
          {historico.length === 0 && (
            <Text style={{ color: '#bbb', textAlign: 'center' }}>
              Nenhum cálculo registrado ainda.
            </Text>
          )}

          {historico.map((h, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#1A1A1A',
                marginBottom: 15,
                padding: 15,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 16, marginBottom: 6 }}>
                {h.tipo}
              </Text>

              {/* Dados do cálculo */}
              {"valor_inicial" in h && (
                <Text style={{ color: '#ccc' }}>
                  Valor Inicial: R$ {h.valor_inicial.toFixed(2)}
                </Text>
              )}

              {"valor_capital" in h && (
                <Text style={{ color: '#ccc' }}>
                  Capital Investido: R$ {h.valor_capital.toFixed(2)}
                </Text>
              )}

              {"jurossimples_calculado" in h && (
                <Text style={{ color: '#ccc' }}>
                  Juros: R$ {h.jurossimples_calculado.toFixed(2)}
                </Text>
              )}

              {"juroscomposto_calculado" in h && (
                <Text style={{ color: '#ccc' }}>
                  Juros: R$ {h.juroscomposto_calculado.toFixed(2)}
                </Text>
              )}

              {"montante_simples" in h && (
                <Text style={{ color: '#ccc' }}>
                  Total: R$ {h.montante_simples.toFixed(2)}
                </Text>
              )}

              {"valor_montante" in h && (
                <Text style={{ color: '#ccc' }}>
                  Total: R$ {h.valor_montante.toFixed(2)}
                </Text>
              )}

              <Text style={{ color: '#9B6DFF', marginTop: 8 }}>
                {h.data} às {h.hora}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.div_botoes_principais}>
          <Botoes_Principais
            onPress={() => navigation.navigate('Inicio')}
            title="Ir para o Início"
          />
        </View>

      </View>
    </View>
  );
}

export default HistoryScreen;
