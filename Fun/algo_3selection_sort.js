/*
given an unsorted array, create a function that implement selection sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray

https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
*/


// function selectionSort(arr){
//     max = 0
//     for (let j = 0; j < arr.length; j++){
//     for (let i = 0; i< arr.length-1-j; i++) { //arr.length -1-j is keeping track of leaving the largest value
//         if (arr[i] > arr[max]){
//             max = i
//         }
//     }
//     [arr[max], arr[arr.length-1-j]] = [arr[arr.length -1- j], arr[max]]//this does the swap
// }
//     return max, arr[max]
// }

// //arr.length-1-j. Breaking this down: arr.length-1 because index is always 0. Then we are keeping track of j because as i increments we add the next largest number at index 4.  First largest number is at index 5, then 2nd largest number will be at index 4. 


// console.log(selectionSort([5,7,2,9,1,4]))

/*
given an unsorted array, create a function that implement selection sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray

https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
*/


function selectionSort(arr){

    for(let j = 0; j < arr.length; j++){
        let max = arr[0];
        let maxIdx = 0
        for(let i = 0; i< arr.length-j; i++){
            //if the value at the current index (i) is greater than the current max, then update the current max to be the value at the current index
            //we need to also keep track of the index number where the max is
            if(arr[i]>max){
                max = arr[i];
                maxIdx = i;
            }
        }
        //after max is found, swap the value at the (end-j) index of the array with the index that contains the max
        [arr[arr.length-1-j], arr[maxIdx]] = [arr[maxIdx],arr[arr.length-1-j]]

    }

    
    return arr
}



console.log(selectionSort([5,7,2,9,1,4]))
console.log(selectionSort([19,-5,2,9,1,4,-9]))




/*
[5,7,2,9,1,4]- input
[5,7,2,4,1,9]


*/