//https://www.rapidtables.com/convert/number/binary-to-decimal.html


function binary2decimal(str){
    let result = 0;
    let exp =0;
    //your code here
    // Math.pow(2,exp)


    return result;

}


console.log(binary2decimal("11100")) //28
//  1   1  1  0  0  
    // 2(4) 2(3) 2(2) 2(1) 2(0)  number in parantheses is the exponent value. Where the 0 is in binary
    // 16 + 8 + 4 = 28

    const binaryToDec = (str) => {
        let newStr = str.split('');
        newStr.reverse();
        let result = 0;
        for (let i = 0; i < newStr.length; i++) {
          if (newStr[i] === '1') {
            result = result + 2**i 
          }
        }
        console.log(result);
        return result
      }
      
      binaryToDec('111'); // output 7   

// Another option
      function binaryToDecimal(str){
        let newstr=str.split('').reverse()
        let result = 0;
        for(let i = 0;i<newstr.length;i++){
            result += (Math.pow(2, i)*newstr[i])
        }
        return result;
    }  

    const bin2dec = binary => {
        let index = binary.length - 1
        let num = 0
        let exp = 0
    
        while(index>=0){
            if(binary[index] == 1){
                let temp = Math.pow(2, exp)
                num += temp
            }
            index--
            exp++
        }
        return num
    }
    
    
// Another option recursive   
    const bin2decRecursive = (binary, index = binary.length - 1, num = 0, exp = 0) => {
        if(index == -1) return num
        if(binary[index] == 1){
            let temp = Math.pow(2, exp)
            num += temp
        }
        return bin2decRecursive(binary, index - 1, num, exp + 1)
    }
    console.log(bin2decRecursive("11100")) // 28
    console.log(bin2decRecursive("1010101")) // 85
    console.log(bin2dec("11100")) // 28
    console.log(bin2dec("1010101")) // 85






