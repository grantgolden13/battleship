export default Gameboard;

function Gameboard() {
    const gameboard = {};

    gameboard.board = [
        [0, 0], [1, 0], [2, 0], [3, 0],
        [1, 0], [1, 1], [1, 2], [1, 3],
        [2, 0], [2, 1], [2, 2], [2, 3],
        [3, 0], [3, 1], [3, 2], [3, 3]
    ];

    gameboard.placeShip = function(coords) {
        let location;
        for (let item of gameboard.board) {
            if (item[0] == coords[0]) {
                if (item[1] == coords[1]) {
                    location = gameboard.board.indexOf(item);
                    gameboard.board[location] = "X";
                    return gameboard.board;
                } 
            }
        }
        return gameboard.board;
    }
    
    return gameboard;
}

const testBoard = Gameboard().placeShip([1, 1]);
console.log(testBoard);