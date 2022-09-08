import Gameboard from './gameboard.js'
import Ship from './ship.js'
import Player from './player.js'

export default Game;

function Game() {
    const game = {};

    game.playerGameboard = Gameboard();
    game.computerGameboard = Gameboard();
    game.player = Player();
    game.computer = Player();
    
    const playerSquares = Array.from(document.querySelectorAll('.grid1 div'));
    playerSquares.forEach((square) => {
        square.addEventListener('click', (e) => {
            const index = playerSquares.indexOf(square);
            const coords = game.playerGameboard.board[index]
            const result = game.playerGameboard.receiveAttack(coords);
            if (result == "hit!") {
                square.style.backgroundColor = 'red';
            } else if (result == "missed") {
                square.style.backgroundColor = 'lightgreen';
            }
            console.log(result);
        });
    });

    const computerSquares = Array.from(document.querySelectorAll('.grid2 div'));
    computerSquares.forEach((square) => {
        square.addEventListener('click', (e) => {
            const index = computerSquares.indexOf(square);
            const coords = game.computerGameboard.board[index]
            const result = game.computerGameboard.receiveAttack(coords);
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