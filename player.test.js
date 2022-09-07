import Player from './player';
import Gameboard from './gameboard';
import Ship from './ship';

test('attack works on miss', () => {
    const testBoard = Gameboard();
    const player1 = Player('player1');
    
    expect(player1.attack([0, 0], testBoard)).toBe("missed");
});

test('attack works on hit', () => {
    const testBoard = Gameboard();
    const player1 = Player('player1');
    const testShip = Ship(2);
    testBoard.placeShip([2, 4], testShip);
    
    expect(player1.attack([2, 4], testBoard)).toBe("hit!");
});

test('attack works on hit', () => {
    const testBoard = Gameboard();
    const player1 = Player('player1');
    const testShip = Ship(2);
    testBoard.placeShip([2, 4], testShip);
    
    expect(player1.attack([3, 4], testBoard)).toBe("hit!");
});