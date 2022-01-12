/*1-global scope-whole file can access. anything that is not in a specific loop or function is accessible to to any loop or function
2-functional scope- var within the function
3-blocked scope-anything within curly braces from things like for loops and conditionals. If statement creates blocked scope
var- is the hulk can get out of a for loop can be used 
let- will only stay in the  for loop or if statement. advantage of let is that computer does not need to keep in memory to keep track so computer/program runs faster.
const- cannot reassign. stays fixed in blocked scope. But can add to, but cannot change orginial.HOISTING- let and const do not have hoisting issues with explain the error. 
*/

var beatles = ['paul', 'george','john', 'ringo'];

function showBeatles(){
    console.log(beatles)
    var bestBeatle= 'ringo'//functional scope-variable inside function can only be accessed in this function
    console.log(bestBeatle)
}

showBeatles()

//Block scopes
if(1 ===1){
    let flag = 'yes, this i correct'
    console.log(flag)
}

/*HOISTING
var will get hoisted. Let and const will not.
var gets hoisted 1st, then functions are hoisted.
*/
