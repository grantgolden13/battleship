import Ship from './ship';

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

test('isSunk correctly identifies non-sunken ship', () => {
    expect(Ship(4).isSunk()).toBe(false);
});

test('isSunk correctly identifies sunken ship', () => {
    const test = Ship(4);
    test.hit(0);
    test.hit(1);
    test.hit(2);
    test.hit(3);
    expect(test.isSunk()).toBe(true)
});

test('isSunk correctly identifies partially sunken ship', () => {
    const test1 = Ship(2);
    test1.hit(0);
    expect(test1.isSunk()).toBe(false);
});