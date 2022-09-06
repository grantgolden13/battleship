import Gameboard from './gameboard';
import Ship from './ship';

test('board works', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    expect(testBoard.placeShip([0, 2], testShip)).toEqual([
        [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
        "X", "X", "X", "X", [4, 2], [5, 2], [6, 2],
        [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
        [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
        [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
        [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6]
    ]);
});