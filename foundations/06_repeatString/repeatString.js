const str = "hey";
const num = 3;

const repeatString = function(str, num) {
    //IF num is less than 0; RETURN - ERROR

    //VAR word = []
    //FOR how many times repeat according to VAR-num
        //PUSH str to word
    //RETURN; .JOIN all string in VAR-word


    if (num < 0){
        return "ERROR";
    }

    let word = str;
    let number = num;
    let words = [];
    for (let i = 0; i < number; i++){
        words.push(word)
    }
    return words.join("")
};

repeatString(str, num)

// Do not edit below this line
module.exports = repeatString;
