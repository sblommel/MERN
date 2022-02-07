// const intersect = (arr1,arr2)=>{

// }



// //return back a new array containing only the numbers that both arrays have in common. if there are repeats in any, have the output only contain the smallest number of repeats 

// console.log(intersect([1,2,3,3,4,4,6], [2,3,4,4,6] )) //[2,3,4,4,6]

// /*
// [2,3,4,4,6]
// */

// console.log(intersect([1,2,3,3,4,4,6], [1,2,3,3,3,3,4,4,6] )) //[1,2,3,3,4,4,6]

/*
[1,2,3,3,4,4,6]
*/


//Brainstorming:
//l get the values arr[i] and arr[j] to match up using if statements and loops. While loops? For loops?

// if we do have a match, check if the next value is the same, if so increase count
// do this for i and j, when it is no longer the same value, take the smaller count into our result array

const intersect = (arr1,arr2)=>{
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr2[j] < arr1[i]) {
            j++
        }
        else if (arr1[i] == arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            j++;
        }
    }
    return newArr;
}

console.log(intersect([1,2,3,3,4,4,6], [2,3,4,4,6] )) //[2,3,4,4,6]

/*
[2,3,4,4,6]
*/

console.log(intersect([1,2,3,3,4,4,6], [1,2,3,3,3,3,4,4,6] )) //[1,2,3,3,4,4,6]
