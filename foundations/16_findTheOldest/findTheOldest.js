const findTheOldest = function(people) {
    const array = people;
    const sorted = array.toSorted((a, b) => ((b.yearOfDeath === undefined ? new Date().getFullYear() : b.yearOfDeath) - b.yearOfBirth) - ((a.yearOfDeath === undefined ? new Date().getFullYear() : a.yearOfDeath)- a.yearOfBirth));
    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
