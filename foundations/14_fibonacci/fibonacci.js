const fibonacci = function(index) {
    if (index < 0){
        return "OOPS";
    } else {
        let fibo = [0 , 1];

        for (let i = 1; i < index; i++){
            fibo.push(fibo[i - 1] + fibo[i]);
        }
        
        return fibo[index];
    }
};

// Do not edit below this line
module.exports = fibonacci;
