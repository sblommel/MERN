const stringDecode = str => {
    let newString = ""
    let temp = ""
    let counter = 0
    for(let i=0;i<str.length;i++){
        if(isNaN(str[i])){
            temp = str[i]
        }else{
            if(counter == 0 && !isNaN(str[i+1])){
                counter = str[i]
            }
            if(counter == 0 && isNaN(str[i+1])){
                counter = str[i]
                while(counter != 0){
                    newString += temp
                    counter--
                }
            }
            if(counter != 0 && isNaN(str[i+1])){
                counter = counter + str[i]
                while(counter != 0){
                    newString += temp
                    counter--
                }
            }
        }
    }
    return newString
}
let codeString = "a3b14c12d1"
console.log(stringDecode(codeString))

const strDecode = (str) => {
    let letr = "";
    let num;
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (isNaN(str[i])) {
        // if we're in here, we know it's not a number
        letr = str[i];
      } else {
        let j = 0;
        while (j < str[i]) {
          result += letr;
          j++;
        }
      }
    }
    console.log(result);
    return result;
  };

  console.log(strDecode("a2b4c12d1"))

// /=======
// function strDecode(str){
//     let letter = "";
//     let num;
//     let result = "";

//     for (let i = 0; i< str.length; i++){
//         if(isNaN(str[i])){
//             //  if we are in here, we know it's not a number
        
//         }else{

//         }

//     }

// }
// console.log(strDecode("a2b4c3 

// *d1"))
// console.log(strDecode("a2b4c12d1")) //"aabbbbccccccccccccd"

// Brainstorm:
// input str = 'a5'
// str = a
// int = 5

// loop through length of string and look at each Character
// is it letter or number?

// Outer FOR loop counts the i's
// if it's a letter, and the next one's a number
// then letter = str[i]
// we can multiply then result += str[i] * str[i+1]

// if it's a number and and the next one is a letter
// then num =str[i] 

// Below will be a INNER loop:
// loop using the same letter 
// set the length of loop to be the number
// loop x times
// result += letter
// END of Outer FOR loop

// result str = aaaa

