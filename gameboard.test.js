import Gameboard from './gameboard';
import Ship from './ship';

test('board works', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    expect(testBoard.placeShip([0, 2], testShip)).toEqual([
        [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
        [0, 2, "X", [testShip, 0]], [1, 2, "X", [testShip, 1]], [2, 2, "X", [testShip, 2]], [3, 2, "X", [testShip, 3]], [4, 2], [5, 2], [6, 2],
        [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
        [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
        [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
        [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6]
    ]);
});

test('gameboard properly receives attack', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    testBoard.placeShip([2, 4], testShip);

    expect(testBoard.receiveAttack([3, 4])).toBe('hit!');
});

test('gameboard properly receives missed attack', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    testBoard.placeShip([2, 4], testShip);

    expect(testBoard.receiveAttack([0, 4])).toBe('missed');
});

test('gameboard properly receives missed attack', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    testBoard.placeShip([2, 4], testShip);
    testBoard.receiveAttack([0, 4]);

    expect(testBoard.misses).toEqual([[0, 4]]);
});

test('gameboard correctly determines if all ships are sunk', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    testBoard.placeShip([2, 4], testShip);
    testBoard.receiveAttack([2, 4]);
    testBoard.receiveAttack([3, 4]);
    testBoard.receiveAttack([4, 4]);
    testBoard.receiveAttack([5, 4]);

    expect(testBoard.allSunk()).toBe(true);
});

test('gameboard correctly determines if all ships are not sunk', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    testBoard.placeShip([2, 4], testShip);
    testBoard.receiveAttack([2, 4]);

    expect(testBoard.allSunk()).toBe(false);
});