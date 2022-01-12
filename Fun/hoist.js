// GIVEN
//console.log(example);
//var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


console.log(hello);
var hello = 'world';
//After hoisting by interpreter
// var hello;
// console.log(hello)//logs undefined
// hello = 'world'

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING FROM INTERPRETER
//var needle;
//console.log(needle)//a function has been called and needle has been defined as 'magnet' now
//needle= 'magnet'

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
// console.log(brendan);
//AFTER HOISTING
//function print will not run because print was not defined before the function.
//this won't let console.log(brendan) outside of the function work either 

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING
//1st console log will return chicken because it is outside the eat function
// var food
// console.log(food)
// food = chicken
//2nd console.log will return half-chicken
// var food
// console.log(food)
// food = half chicken
//gone will not print out since we do not have a console.log
//var food


// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//After hoisting
//Undefined at 1st console.log(food)
//food is not defined and mean is not defined.
//var mean = function () will also cause undefined as well

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//AFTER HOISTING
//var genre
//console.log(genre)
//genre = rock
//var genre
//console.log(genre)
//genre = r&b
//var genre
//console.log(genre)
//genre = disco
//rock, r and b, disco will return in terminal
//1st console log will not return anything--correction it will return undefined

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//After HOISTING
//dojo given a value
//1st console.log(dojo)
// dojo = san jose
//2nd console.log(dojo)
// dojo = seattle
//3nd console.log(dojo)
// dojo = burbank
//4th console.log(dojo)
// dojo = san jose

//Terminal will return san jose, seattle, burbank, san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";//error is here
    }
    return dojo;
}

//Terminal prints out
// { name: 'Chicago', students: 65, hiring: true }
// dojo = "closed for now";















