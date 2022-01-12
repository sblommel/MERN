class Ninja{
    constructor(name){
        this.name = name;
        this.health = 0;
        this.strength = 3;
        this.speed = 3;
    }

    sayName(){
        console.log(`My name is  ${this.name}`)
    }

    showStats(){
        console.log("Ninja " + this.name, "stats are health:" + this.health, "strength:"  + this.strength + " and speed:" + this.speed)
    }

    drinkSake(){
        this.health += 10;
        console.log ("Drinking sake increases your health")
    }
}

let ninja1 = new Ninja("Tom")
let ninja2 = new Ninja("Sam")
console.log(ninja1)
console.log(ninja2)

ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()

ninja2.drinkSake()
ninja2.showStats()
ninja2.drinkSake()
ninja2.showStats()


//Solutions answer from Learn Platform

class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Ryu");
ninja1.sayName().showStats().drinkSake().showStats();