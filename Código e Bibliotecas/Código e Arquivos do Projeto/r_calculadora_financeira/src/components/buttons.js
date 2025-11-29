import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles/global_styles';

function Botoes_Principais({ title, onPress }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.botoes_principais,
        (pressed || hovered) && styles.hover_botoes_principais,
      ]}
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
    >
      <Text style={styles.texto_botao}>{title}</Text>
    </Pressable>
  );
}

function Botoes_Secundarios({ title, onPress }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.botoes_segundarios,
        (pressed || hovered) && styles.hover_botoes_seundarios,
      ]}
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
    >
      <Text style={styles.texto_botao}>{title}</Text>
    </Pressable>
  );
}

export default Botoes_Principais;
export { Botoes_Secundarios };
