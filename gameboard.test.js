import Gameboard from './gameboard'

test('board works', () => {
    const testBoard = Object.create(Gameboard());
    
    expect(testBoard.placeShip([2, 2])).toEqual([
        [0, 0], [1, 0], [2, 0], [3, 0],
        [1, 0], [1, 1], [1, 2], [1, 3],
        [2, 0], [2, 1], "X", [2, 3],
        [3, 0], [3, 1], [3, 2], [3, 3]
    ])
})