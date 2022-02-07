// function strEncode(str){

// }



// console.log(strEncode("aaaabcccddddd")) //a4b1c3d5
// console.log(strEncode("abcccddeeeee")) //a1b1c3d2e5

// Brainstorming:

// aab//loop thru look at each letter and check if the letter before matches,
// // check edge cases first or last and then hand appropriately
// // if they match count the matching letters,
// // if not a match then add the count to outputStr.
// // add count in
// // reset count (after no match, moving from a to b)
// // add new letter to output
// // exit loop, add remaining count in
// count = 1
// output = a 
// // (don't want to add the 2nd a to the string, but we do want to increase count to 2)

// function strEncode(str) {

//     let count = 1;
//     let output = "";
  
//     for (let i = 0; i < str.length; i++) {
//       if (i === 0) {
//         // if it's the first letter / first position
//         output = str[i]; // add it to the output = a
//       } else if (str[i] === str[i - 1]) {
//         count++;
//       } else if (str[i] !== str[i - 1]) {
//         ab;
//         output += count; //a1
//         count = 1; // reset count
//         output += str[i]; // output a1b
//       }
//     }
//     output += count; // output
//     return output;
//   }

//   console.log(strEncode("aaaabcccddddd")) //a4b1c3d5
// console.log(strEncode("abcccddeeeee")) //a1b1c3d2e5

function strEncode(str){
    let newString =""
    let counter =1;
    let currentChar = str[0]
    //for loop
    for (let i=1; i <str.length; i++) {
        if (currentChar === str[i]){
            counter++;

        } else {
            newString += currentChar + counter // this is going to add the letter and the count to new string 
            currentChar = str[i]
            counter = 1;
        }
        if (str[i+1] === undefined) {
            newString += currentChar + counter 
        }
        
    }
    return newString

}
console.log(strEncode("aaaabcccddddd")) //a4b1c3d5
console.log(strEncode("abcccddeeeee")) //a1b1c3d2e5
