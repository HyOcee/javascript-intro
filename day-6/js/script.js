function addArrayValues(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}

const myArray = [1, 2, 3, 4, 5]
console.log(addArrayValues([1, 2, 3, 4, 5]))

function sumNumbers(a, b, c) {
    return ((a * b) + (b - c))
}

console.log(sumNumbers(1, 2, 1))





let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}
let fun = () => {
    alert('you agreed')
} 

let ction = () => {
    alert('you cancelled')
}
ask('do you agree', fun, ction)