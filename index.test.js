import Ship from './index';

test('ship factory works', () => {
    expect(Ship(4).sections).toEqual([1, 1, 1, 1]);
});

test('only takes numbers 2 - 5', () => {
    expect(Ship(6).sections).toBe('Error: ship size too large');
});

test('only takes numbers 2 - 5', () => {
    expect(Ship(1).sections).toBe('Error: ship size too small');
});

test('takes a hit', () => {
    expect(Ship(4).hit(2)).toEqual([1, 1, "hit", 1]);
});

test('sections isnt affected on miss', () => {
    expect(Ship(4).hit(6)).toEqual([1, 1, 1, 1]);
});

test('isSunk identifies non-sunken ship', () => {
    expect(Ship(4).isSunk()).toBe(false);
});

test('isSunk identifies sunken ship', () => {
    const test = Object.create(Ship(4));
    test.hit(0);
    test.hit(1);
    test.hit(2);
    test.hit(3);
    expect(test.isSunk()).toBe(true)
})