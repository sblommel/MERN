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

const ninja1 = new Ninja("Tim");
const ninja2 = new Ninja("Sam")
ninja1.sayName().showStats().drinkSake().showStats();
ninja2.sayName().showStats().drinkSake().showStats();

class Sensei extends Ninja{
    constructor (name, health, wisdom=10){
        super(name, health)
        this.wisdom = wisdom;

    }

    speakWisdom(){
        this.drinkSake()
        console.log(`${this.name} says Life is wisdom.Live life.`)
    }
        
}

let s1 = new Sensei ("Sue")
console.log(s1)
s1.speakWisdom()
console.log(s1)