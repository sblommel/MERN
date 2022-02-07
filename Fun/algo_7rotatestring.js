//create a function that accepts a string and a number as an INPUT, and that function will return the string rotated by the input number.

abcdefg and rotate 3
0123456

efg, abcd
456, 0123

// let str = "abcdefg"; // string length 7
// let n = 18; //offset
// console.log(n % str.length);

// EXAMPLE
// abcd,efg rotate by 3
// 0123,456


// 012,3456 //index of result
// efg,abcd
// 456,0123 //the matching indexes in the original string

function rotateString(str, n) {
    n = n % str.length; //offset
    let newStr = "";
  
    for (let i = 0; i < str.length; i++) {
      newStr += str[(str.length - n + i) % str.length];
    // }               str[7       - 3 + 0 ] > str[4 % 7] > e
    // }               str[7       - 3 + 1 ] > str[5 % 7] > f
    // }               str[7       - 3 + 2 ] > str[6 % 7] > g
    // }               str[7       - 3 + 3 ] > str[7 % 7] > str[0] > a
    // }               str[7       - 3 + 4 ] > str[8 % 7] > str[1] > b
    // }               str[7       - 3 + 5 ] > str[9 % 7] > str[2] > c
    // }               str[7       - 3 + 6 ] > str[10 % 7] > str[3] > d
    return newStr;
  }



console.log(rotateStr("abcdefg", 3)) 
console.log(rotateStr("abcde", 10))


