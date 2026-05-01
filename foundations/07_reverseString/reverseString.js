const word = "Hello World";

const reverseString = function(str) {
    //make a VARIABLE of the STRING
    //SPLIT the STRING into letters on to an array
    //REVERSE the array
    //RETURN: JOIN the array 

    let string = str;
    let arr = string.split('');
    arr.reverse()
    
    return arr.join('');
};

reverseString(word)

// Do not edit below this line
module.exports = reverseString;
