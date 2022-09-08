import Gameboard from './gameboard.js';

export default Player;

function Player() {
    const player = {};

    player.attackedCoords = [];

    player.randomAttack = function(enemyGameboard) {
        const randomIndex = Math.floor(Math.random() * 50);
        const randomCoords = enemyGameboard.board[randomIndex];
        const result = enemyGameboard.receiveAttack(randomCoords);
        // will need to fix this bc it will fuck up the indexes of the remaining coords
        enemyGameboard.board.splice(randomIndex, 1);
        player.attackedCoords.push(randomCoords);
        return result;
    }

    player.attack = function(coords, enemyGameboard) {
        return enemyGameboard.receiveAttack(coords);
    }

    return player;
}