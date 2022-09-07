import Ship from './ship.js';

export default Gameboard;

function Gameboard() {
    const gameboard = {};

    gameboard.board = [
        [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2],
        [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
        [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
        [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
        [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6]
    ];

    gameboard.misses = [];

    gameboard.placeShip = function(coords, ship) {
        let length = ship.sections.length;
        let startLocation;
        for (let item of gameboard.board) {
            if (item[0] == coords[0] && item[1] == coords[1]) {
                startLocation = gameboard.board.indexOf(item);
                gameboard.board[startLocation].push("X");
                for (let i = (length - 1); i > 0; i--) {
                    gameboard.board[startLocation + i].push("X");
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
                    result = "hit!";
                }
                return result;
            }
        }
    }

    return gameboard;
}

const testBoard = Gameboard();
const testShip = Ship(4);

testBoard.placeShip([2, 4], testShip);

testBoard.receiveAttack([3, 4]);

console.log(testBoard)
