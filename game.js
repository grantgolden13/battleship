import Gameboard from './gameboard.js'
import Ship from './ship.js'
import Player from './player.js'

export default Game;

function Game() {
    const game = {};

    game.gameboard1 = Gameboard();
    game.gameboard2 = Gameboard();
    game.player1 = Player();
    game.player2 = Player();
    
    const boardSquares1 = Array.from(document.querySelectorAll('.grid1 div'));
    boardSquares1.forEach((square) => {
        square.addEventListener('click', (e) => {
            const index = boardSquares1.indexOf(square);
            const coords = game.gameboard1.board[index]
            const result = game.gameboard1.receiveAttack(coords);
            if (result == "hit!") {
                square.style.backgroundColor = 'red';
            } else if (result == "missed") {
                square.style.backgroundColor = 'lightgreen';
            }
            console.log(result);
        });
    });

    const boardSquares2 = Array.from(document.querySelectorAll('.grid2 div'));
    boardSquares2.forEach((square) => {
        square.addEventListener('click', (e) => {
            const index = boardSquares2.indexOf(square);
            const coords = game.gameboard2.board[index]
            const result = game.gameboard2.receiveAttack(coords);
            if (result == "hit!") {
                square.style.backgroundColor = 'red';
            } else if (result == "missed") {
                square.style.backgroundColor = 'lightgreen';
            }
            console.log(result);
        });
    });

    return game;
}

Game();