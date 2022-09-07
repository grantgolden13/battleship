import Gameboard from './gameboard.js';

export default Player;

function Player(name) {
    const player = {};

    player.name = name;

    player.attack = function(coords, enemyGameboard) {
        return enemyGameboard.receiveAttack(coords);
    }

    return player;
}