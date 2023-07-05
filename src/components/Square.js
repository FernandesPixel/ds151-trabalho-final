import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

/*
Componente que representa uma casa do tabuleiro
Recebe duas propriedades:
- value: representa o valor da casa, "X" ou "O" ou null
- onPress: função que será chamada quando a casa for pressionada -> handleSquarePress no componente Game
*/
const Square = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Square;
