// Creates a Ship class to use for all the other ships in this game.

class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

}

//Sets up the USS Assembly Ship with the pre-determined parameters from the instructions

let USSA = new Ship("USS Assembly", 20, 5, 0.7,);

//create at least 6 alien ships with hulls... can either be done individually, or by using an array.
//will be an empty array for it have the 6 different ships and their properties.
let alienShips = [];

//this for loop will create the 6 alien ships that will be used against the USSA ship.

for (let i = 0; i < 6; i++) {
    alienShips[i] = new Ship(`Alien Invader ${i + 1}`, (Math.floor(Math.random() * (7 - 3) + 3)), (Math.floor(Math.random() * (5 - 2) + 2), (Math.floor(Math.random() * (0.8 - 0.6) + 0.6))))
}

