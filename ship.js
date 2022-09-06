export default Ship;

function Ship(length) {
    const ship = {};
    ship.sections = [];
    ship.sections = fillShip(length, ship);

    ship.hit = function(index) {
        if (index > ship.sections.length || index < 0) {
            return ship.sections;
        } else {
            ship.sections[index] = "hit";
            return ship.sections;
        }
    }

    ship.isSunk = function() {
        const areNotHit = (element) => element !== "hit";
        if (ship.sections.some(areNotHit)) {
            return false;
        } else {
            return true;
        }
    }

    return ship;
}

function fillShip(length, ship) {
    if (length > 5) {
        return "Error: ship size too large";
    } else if (length < 2) {
        return "Error: ship size too small"
    }

    for (let i = length; i > 0; i--) {
        ship.sections.push(1);
    }
    return ship.sections;
}