import Ship from './ship.js';

export default Gameboard;

function Gameboard() {
    const gameboard = {};

    gameboard.board = [
        [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0],
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1],
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2],
        [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3],
        [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4],
        [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5],
        [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6],
        [0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7],
        [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8],
        [0, 9], [1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9]
    ];

    gameboard.misses = [];

    gameboard.placeShip = function(coords, ship) {
        let length = ship.sections.length;
        let startLocation;
        let pointer = ship;
        for (let item of gameboard.board) {
            if (item[0] == coords[0] && item[1] == coords[1]) {
                startLocation = gameboard.board.indexOf(item);
                gameboard.board[startLocation].push("X");
                gameboard.board[startLocation].push([pointer, 0])
                for (let i = 1; i < length; i++) {
                    gameboard.board[startLocation + i].push("X");
                    gameboard.board[startLocation + i].push([pointer, i]);
                }
                return gameboard.board;
            }
        }
        return gameboard.board;
    }

    gameboard.receiveAttack = function(coords) {
        let result;
        for (let item of gameboard.board) {
            if (item[0] == coords[0] && item[1] == coords[1]) {
                if (item[2] == "X") {
                    item[2] = "O";
                    let ship = item[3][0];
                    let hitIndex = item[3][1];
                    ship.hit(hitIndex);
                    result = "hit!";
                }
            }
        }
        if (result == null || result == undefined) {
            gameboard.misses.push(coords);
            result = "missed";
        }
        return result;
    }

    gameboard.allSunk = function() {
        let ships = [];
        for (let item of gameboard.board) {
            if (item[2] == "X" || item[2] == "O") {
                if (ships.includes(item[3][0]) !== true) {
                    ships.push(item[3][0]);
                }
            }
        }
        const areSunk = (ship) => ship.isSunk() == true;
        const sunkenShips = ships.every(areSunk);
        return sunkenShips;
    }

    return gameboard;
}