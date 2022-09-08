import Gameboard from './gameboard.js'
import Ship from './ship.js'
import Player from './player.js'

export default Game;

function Game() {
    const game = {};

    game.gameboard1 = Gameboard();
    game.gameboard2 = Gameboard();
    game.player1 = Player('player1');
    game.player2 = Player('player2');
    
    const boardSquares1 = document.querySelectorAll('.grid1 div');
    boardSquares1.forEach((square) => {
        changeColor(square);
    });

    const boardSquares2 = document.querySelectorAll('.grid2 div');
    boardSquares2.forEach((square) => {
        changeColor(square);
    });
}

function changeColor(square) {
    square.addEventListener('click', () => {
        square.style.backgroundColor = 'lightgreen';
    });
}

Game();