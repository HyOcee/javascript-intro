// let res = prompt('who is there?', 'Jae Hee');

// if(res === null) {
//     console.log('cancelled')
// } else if(res !== 'Admin') {
//     console.log('I dont know you')
// } else {
//     let password = prompt('Enter Password');

//     if(password === null) {
//         console.log('cancelled')
//     } else if(password !== 'TheMaster') {
//         console.log('wrong password')
//     } else {
//      console.log('You\'re welcome boss')
//     }
// }

let inputData = document.getElementsByTagName('input');

let optionData = document.getElementsByTagName('option');

for (let i = 0; i < inputData.length; i++) {
    console.log(inputData[i].value)
}

for (let i = 0; i < optionData.length; i++) {
    console.log(optionData[i].value)
}

let dataIn = document.getElementsByTagName('input');

    dataIn.push('jjj')

    for (let i = 0; i < dataIn.length; i++) {
        console.log(dataIn[i].value)
    }