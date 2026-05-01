const removeFromArray = function() {
    let arg = Array.from(arguments);
    let toRemove = arg.slice(1);
    let array = arg[0];

    return array.filter(items => !toRemove.includes(items));
};

// Do not edit below this line
module.exports = removeFromArray;
