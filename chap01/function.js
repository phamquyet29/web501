// function name
function sum(a, b){
    if(!Number(a) || !Number(b)) return -1;
    return a + b;
}
console.log('function name', sum(3,4));

// function expression
const sum2 = function(a, b){
    if(!Number(a) || !Number(b)) return -1;
    return a + b;
}
console.log('function expression',sum2(3,4));

// function arrow
const sum3 = (a, b) => {
    if(!Number(a) || !Number(b)) return -1;
    return a + b;
}
console.log('function arrow',sum3(3,4));