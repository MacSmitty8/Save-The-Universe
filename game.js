let battleBtn = document.getElementById("battle");
let retreatBtn = document.getElementById("retreat");

// Creates a Ship class to use for all the other ships in this game.

class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    battle(invader){
        if(Math.random() < this.accuracy){
            console.log("================")
            console.log(`${this.name} missed their attack!`);
            return `${invader.name} hull: ${invader.hull}`
        } else {
            invader.hull -= this.firepower;
            console.log("============");
            console.log(`${this.name} dealt ${this.firepower} damage!`);
            return `${invader.name} hull: ${invader.hull}`
        }
    }
    update() {
        console.log(`${this.name}'s hull: ${this.hull},`);
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

//Make a boolean for controlling the loops and turns.

let optionSelect = true;

battleBtn.addEventListener("click", function (){
    optionSelect = false;
    //Make sure this loop happens during the whole game, or in this case while the USSA hull is greater than 0, and the alienShips is greater than 0.
    if(USSA.hull > 0 && alienShips.length > 0 && optionSelect == false){

        USSA.battle(alienShips[0]);
        USSA.update();
        alienShips[0].update();
    }
    //This part checks to see if the USSA attacks destroyed an invading ship.
    if (alienShips[0].hull > 0) {
        //alienShips will attack the USSA
        alienShips[0].battle(USSA);
        USSA.update();
        alienShips[0].update();
        optionSelect = true;
        //Things below will check to see if the aliens attack has destroyed the USS Assembly's hull, and if it does, it'll log out a game over.
        if (USSA.hull <= 0){
            window.setTimeout(function (){
                //console.log the game over as well as show it on the screen.
                console.log("The Aliens have won, and sucessfully invaded Earth. Game Over.");
            }, 3000)
        }
    } else {
        alienShips.shift();
        console.log(`Remaining Alien Ships: ${alienShips.length}`);

        //console log the victory if the while loop finishes due to all alien ships being destroyed while the USSA's hull is greater than 0.
        if(USSA.hull > 0 && alienShips.length === 0){
             console.log("The Alien Invaders have been defeated! Refresh the page if you want to play again.");
        }
        optionSelect = true;
    }
})
//By clicking the retreat button
retreatBtn.addEventListener("click",  function(){
    console.log("Earth has surrendered to the invaders... Game Over");
})
