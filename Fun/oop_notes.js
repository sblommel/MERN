//create a class using class keyword
//constructor function runs when new athlete is created and this function will initialize this new athlete with the attributes defined in the constructor.

class Athlete{
    constructor(name, speed){
        this.name = name;
        this.energy = 100;
        this.speed = speed;
        this.strength = 75;
    }

    //functionalities an Athlete can perform goes here
    sayName(){
        console.log("My name is " + this.name);
    }

    playGame(sportName, energySpent){
        console.log (this.name + " plays " + sportName)
        this.energy -= energySpent;
    }
}

//creating instances of the Athlete class-- also call these athlete objects. Instances of Athlete and objects  are same

const a1 =new Athlete("Bob", 99)
const a2 =new Athlete("Serena", 90)

// console.log(a1.name)
// a1.name = "Michael Jordan GOAT"
// console.log(a1)
// console.log(a2)


// console.log("a1 and a2 are playing some games/sports")
// a2.playAGame("Tennis", 30)
// a1.playAGame("Swimming", 50)

// console.log(a1)
// console.log(a2)



/*Inheritance We can create sub classes from Athlete class but add additional functionality specific to Swimmer

*/
class Swimmer extends Athlete{
    constructor(name, speed, lungCapacity) {
        super(name, speed)
        this.lungCapacity = lungCapacity;

    }

    swim(energySpent){
        console.log("swimming")
        this.energy -= energySpent;
    }
}

//creating an instance of a swimmer
let swimmer1 = new Swimmer("Carrie", 100, 70)
let swimmer2 = new Swimmer("Tony", 80, 90)

console.log(swimmer1)
console.log(swimmer2)

//swimmer1.playGame("swim", 30)
swimmer1.swim(45)

class Basketballer extends Athlete{
    constructor(name, speed, jump){
        super(name, speed)

        this.Jump = jump;
    }

    dunkBall(energySpent){
        console.log("Sport Center Best")
        this.energy-= energySpent;
    }
}

let b1 = new Basketballer("Lebron", 50, 50)

console.log(b1)