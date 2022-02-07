//Union sorted array.
//Combine the numbers in the 2 already sorted arrays. Including just single repeating number BUT include the largest number set.

/*
Union Sorted Arrays
Efficiently combine two already-sorted arrays into a new sorted array containing the
multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].
*/


function union(arr1,arr2){


    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        //value of i compared with the value of j, and if they are equal in
        if (arr1[i] == arr2[j]) {
            result.push(arr1[i])
            i++;
            j++;
        }
        //if not equal that mean? if the value is less
        else if (arr1[i] < arr2[j]) {
            result.push(arr2[j]);
            i++;
            
        }

        else if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        }
        console.log (i, j)
        while  ( i < arr1.length){
            result.push(arr1[i])
            i++;
        }
        while (j < arr2.length){
            result.push(arr2[j])
            j++;
        }
    }
        
    return result;
}

console.log(union([1,2,2,2,7],[2,2,6,6,7] )) //[1,2,2,2,6,6,7]