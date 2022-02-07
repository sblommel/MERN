/https://www.rapidtables.com/convert/number/decimal-to-hex.html


const dec2hex = (num)=>{
    //hint--use this conversion string to match up the index number with the hex number for your remainders
    //hint- you will need to store remainders somewhere
    //let conversionString = "0123456789ABCDEF"



}



console.log(dec2hex(35631)) //8B2F


function decToHex(num) {
    let conversionString = '0123456789ABCDEF'
    let remainders = [];
    let result = '';

    while (num > 0) {

        let remainder = num % 16;
        // console.log(remainder)
        remainders.push(remainder);
         // console.log(remainders)

        num = Math.floor(num / 16);

    }

    for (let i = remainders.length -1; i >= 0; i-- ) {
        
        conversionString[remainders[i]]

        // console.log(conversionString[remainders[i]])

        result+=conversionString[remainders[i]]
    }

    return result

}


console.log(decToHex(35631)) //8B2F

Another option:
