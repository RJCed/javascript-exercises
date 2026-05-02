
const addRange = function(min, max){ // Add the numbers from the minimum value to the maximum
     let total = 0;
     for (let i = min; i <= max; i++){
        total = total + i;
     }
     return total;
}

const sumAll = function(num1, num2) { //Logic for each instance
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0){
        return "ERROR";
    }

    if (num1 < num2 || num1 === num2){
        return addRange(num1, num2);
    } else if (num1 > num2){
        return addRange(num2, num1)
    }

};

// Do not edit below this line
module.exports = sumAll;
