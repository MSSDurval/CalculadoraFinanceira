import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles/global_styles';

export default function Botoes_Principais({ title, onPress }) {
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