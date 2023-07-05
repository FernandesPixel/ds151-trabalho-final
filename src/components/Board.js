import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

/*
Representa o tabuleiro
recebe duas propriedades
- squares: as casas do tabuleiro
- onPress: função que será chamada quando a casa for pressionada -> handleSquarePress no componente Game
*/
const Board = ({ squares, onPress }) => {

    //função que faz a renderização da casa
    //recebe o índice da casa
    const renderSquare = (index) => {
    return (
        <TouchableOpacity style={styles.square} onPress={() => onPress(index)}>
        <Text style={styles.squareText}>{squares[index]}</Text>
        </TouchableOpacity>
    );
    };

    //Renderização das casas que formam o tabuleiro
    return (
    <View style={styles.board}>
        <View style={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        </View>
        <View style={styles.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </View>
        <View style={styles.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  board: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 80,
    height: 80,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc1068',
    borderColor: '#fcab10'
  },
  squareText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f0441'
  },
});

export default Board;
