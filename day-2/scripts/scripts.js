let digit = 9999;
let newDigit = String(digit);

console.log(typeof(newDigit));

let conv  = String(100 + 23);

console.log(conv + ' is a ' + typeof(conv));

let boool = false;
let newBoool = String(boool);
console.log(newBoool + ' is a ' + typeof(newBoool))

let ddd = 'dsf';
let newddd = Boolean(ddd);
console.log(newddd + ' is a ' + typeof(newddd))

// var weekNumber = Number(prompt('which week are you?', '0'));

// if(weekNumber === 1 || weekNumber === 2) {
//     console.log('your teacher is Fisayo')
// } else if (weekNumber === 3 || weekNumber === 4) {
//     console.log('your teacher is Arinze')
// } else if(weekNumber === 5 || weekNumber === 6) {
//     console.log('your teacher is Lekan')
// } else {
//     console.log('are you normal?')
// }


a = 0;
b = 8; 
let rrr = a+b < 4 ?  'below' : 'over';
console.log(rrr)

login=''
let message = login === 'Employee'? 'Hello': login === 'Director'? 'Greetings': login === ''? 'No login': '';
console.log(message)




let result = document.querySelector('#result');

result.innerHTML = 0;
let operands = [0], i=1;

const number = (num) => {
    operands[i] = num;
    i++;
    console.log(operands)
    result.innerHTML = result.innerHTML + num
}

var operator;

const operation =(sym) => {
    switch (sym) {
        case '+':
            operator = '+'
            break;
        case '-':
            operator = '-'
            break;
        case '%':
            operator = '%'
            break;
        case '/':
            operator = '/'
            break;
        case '*':
            operator = '*'
            break;
        default:
            operator = '+'
    }
}

const solve = () => {
    console.log(operator)
    switch (operator) {
        case '+':
            result.innerHTML = operands[operands.length-1] + operands[operands.length-1]
            console.log(result.innerHTML)
            break;
        case '-':
            result.innerHTML = operands[operands.length-1] - operands[operands.length-1]
            break;
        case '%':
            result.innerHTML = operands[operands.length-1] % operands[operands.length-1]
            break;
        case '/':
            result.innerHTML = operands[operands.length-1] / operands[operands.length-1]
            break;
        case '*':
            result.innerHTML = operands[operands.length-1] * operands[operands.length-1]
            break;
        default:
            operator = '';
    }
}