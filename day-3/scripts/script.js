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

let dataIn = document.getElementsByTagName('input');

for (let i = 0; i < dataIn.length; i++) {
    console.log(dataIn[i].value)
}