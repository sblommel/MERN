//https://www.rapidtables.com/convert/number/decimal-to-binary.html

// function dec2binary(num){
//     let result = '';

// }


// console.log(dec2binary(28)) //"11100"


function dec2binary(num) {
    let result = '';
    let remainders = [];

    while (num > 0) {
        let remainder = num % 2;
        remainders.push(remainder)

        console.log(remainder)
        num = Math.floor(num / 2);

    }

    for (let i = remainders.length -1; i >= 0; i-- ) {
        result += remainders[i]
    }


    return result;
}


console.log(dec2binary(28)) //"11100"