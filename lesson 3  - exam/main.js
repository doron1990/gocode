// function showBigger(num1, num2){
//     if(num1 === parseInt(num1) && num2 === parseInt(num2)){
//         if(num1 > num2){
//             console.log('the bigger number is ' + num1)
//         }else if(num1 <= num2){
//             console.log('the bigger number is ' + num2)
//         }

//     }else{
//         console.log('wrong output')
//     }
    
// }
// showBigger(-31,2)


// function showBiggerFromUser(num1, num2){
//     if(num1 === parseInt(num1) && num2 === parseInt(num2)){
//         if(num1 > num2){
//             console.log('the bigger number is ' + num1)
//         }else if(num1 <= num2){
//             console.log('the bigger number is ' + num2)
//         }
        

//     }else{
//         console.log('wrong output')
//     }

// }

// const number1 = parseInt(prompt('please enter a number'))
// const number2 = parseInt(prompt('please enter a second number'))
// showBiggerFromUser(number1, number2)


// function calculator(num1, num2, sign){
//     if(num1 === parseInt(num1) && num2 === parseInt(num2)){
//         if(sign === '+'){
//             sum = num1 + num2
//             console.log('the sum  is ' + sum)
//         }else if(sign === '*'){
//             result = num1 * num2
//             console.log('the result is ' + result)
//         }
//         else if(sign === '/' && num2 !== 0){
//             result = num1 / num2
//             console.log('the result is ' + result)
//         }else{
//             console.log('wrong output')
//         }

//     }
//     else{
//         console.log('wrong output')

//     }

// }

// const number1 = parseInt(prompt('please enter a number'))
// const number2 = parseInt(prompt('please enter a number'))
// const mathSign = prompt('please enter a sign')
// calculator(number1, number2, mathSign)

function sumNumbers(num1, num2){
    const sum = num1 + num2
    console.log('the sum is ' + sum)
}

function multiplyNumbers(num1, num2){
    const results = num1 * num2
    console.log('the sum is ' + results)
}

const number1 = parseInt(prompt('please enter a number'))
const number2 = parseInt(prompt('please enter a number'))
const mathSign = prompt('please enter a sign')
if(number1 === parseInt(number1) && number2 === parseInt(number2)){
    if(mathSign === '+'){
        sumNumbers(number1, number2)
    }else if(mathSign === '*'){
        multiplyNumbers(number1, number2)
    }else {
        console.log('wrong output')
    } 
}else {
    console.log('wrong output')
} 



