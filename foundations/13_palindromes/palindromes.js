const palindromes = function (palindromes) {
    let characters = "abcdefghijklmnopqrstuvwxyz0123456789"
    const item = [...palindromes.toLowerCase()].filter(char => characters.includes(char)).join('');
    const itemReverse = item.split('').toReversed().join('');


    console.log(item);
    console.log(itemReverse);
    if (item === itemReverse){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
