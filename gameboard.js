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

    gameboard.placeShip = function(coords, length) {
        let startLocation;
        for (let item of gameboard.board) {
            if (item[0] == coords[0]) {
                if (item[1] == coords[1]) {
                    startLocation = gameboard.board.indexOf(item);
                    gameboard.board[startLocation] = "X";
                    for (let i = (length - 1); i > 0; i--) {
                        gameboard.board[startLocation + i] = "X";
                    }
                    return gameboard.board;
                } 
            }
        }
        return gameboard.board;
    }

    return gameboard;
}