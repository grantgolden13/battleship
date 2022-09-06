import Gameboard from './gameboard'

test('board works', () => {
    const testBoard = Object.create(Gameboard());
    
    expect(testBoard.placeShip([2, 2], 1)).toEqual([
        [0, 0], [1, 0], [2, 0], [3, 0],
        [0, 1], [1, 1], [2, 1], [3, 1],
        [0, 2], [1, 2], "X", [3, 2],
        [0, 3], [1, 3], [2, 3], [3, 3]
    ]);
});

test('board works with an actual-length ship', () => {
    const testBoard = Object.create(Gameboard());

    expect(testBoard.placeShip([0, 2], 4)).toEqual([
        [0, 0], [1, 0], [2, 0], [3, 0],
        [0, 1], [1, 1], [2, 1], [3, 1],
        "X", "X", "X", "X",
        [0, 3], [1, 3], [2, 3], [3, 3]
    ]);
});