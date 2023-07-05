import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Board from './Board';

/*
Componente principal
Responsável por gerenciar o estado do jogo, das casas do tabuleiro, 
o próximo jogador e o vencedor
*/
const Game = () => {
    //Estados do jogo    
    const [squares, setSquares] = useState(Array(9).fill(null)); //Representa as 9 casas do tabuleiro
    const [xIsNext, setXIsNext] = useState(true); //Indica se o próximo jogador é o "X" ou "O"
    const [winner, setWinner] = useState(null); //Indica o vencedor do jogo

    //Manipulador de clique nas casas
    //recebe o índice da casa que foi clicada
    const handleSquarePress = (index) => {
        //verifica se a casa já está preenchida ou se já tem um vencedor
        if (squares[index] || winner) {
        return;
        }

        const updatedSquares = [...squares]; //faz uma cópia das casas 
        updatedSquares[index] = xIsNext ? 'X' : 'O'; // prenche a casa com "X" ou "O"

        setSquares(updatedSquares); //atualiza o estado das casas
        setXIsNext(!xIsNext); //atualiza o estado do próximo jogador

        //verifica se houve um vencedor
        const calculatedWinner = calculateWinner(updatedSquares);
        if (calculatedWinner) {
        setWinner(calculatedWinner); //atualiza o estado do vencedor, se houver
        }
    };

    //reinicia o jogo atualizando os estados para os estados iniciais
    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
    };

    //renderiza o status do jogo
    const renderStatus = () => {
        if (winner) {
        return `Winner: ${winner}`; //mostra o vencedor, se houver
        } else if (squares.every((square) => square !== null)) {
        return 'Draw!'; //mostra que o jogo empatou
        } else {
        return `Next player: ${xIsNext ? 'X' : 'O'}`; //mostra o próximo jogador
        }
    };

    //renderização do tabuleiro
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <Board squares={squares} onPress={handleSquarePress} />
            <Text style={styles.status}>{renderStatus()}</Text>
            <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
            <View style={styles.description}>
                <Text style={styles.text}>DS151 DESENVOLVIMENTO PARA DISPOSITIVOS MÓVEIS</Text>
                <Text style={styles.text}>Juan Carlo Fernandes Ribas Ribeiro de Morais</Text>
            </View>
        </View>
    );
};

//verifica se tem um vencedor, com base nas casas preenchidas
const calculateWinner = (squares) => {
    //casos em que há um vencedor
    //indices das casas que resultam em um vencedor
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    //para cada linha do array de combinações(lines)
    //verifica se estão com o mesmo valor e não são nulos
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }

    return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1f0441'
  },
  status: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#1f0441'
  },
  resetButton: {
    backgroundColor: '#1f0441',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#fcab10',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  text: {
    fontSize: 15,
    color: '#1f0441'
  }
});

export default Game;