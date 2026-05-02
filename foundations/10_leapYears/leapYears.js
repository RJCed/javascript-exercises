
// LEAP YEAR: Divisible by 4, Divisible by 400
// NOT LEAP YEAR: Divisible by 100
const leapYears = function(year) {
    let isLeapYear = false;
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
