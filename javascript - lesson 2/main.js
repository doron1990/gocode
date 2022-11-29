
function myName(firstName, LastName){
    return ('your name is ' + firstName + ' ' + LastName)
}
const a = prompt('enter your firstname')
const b = prompt('enter your lasttname')
const fullName = myName(a, b)
console.log(fullName)

function isEven(num1, num2, num3){
    if(num1 > num2){
        if(num1 >= num3){
            console.log(num1)
        }else{
            console.log(num3)
        }
    }else if(num2 >= num3){
        console.log(num2)
    }else{
        console.log(num3)
    }
}
const n1 = parseInt(prompt('enter first num'))
const n2 = parseInt(prompt('enter 2th num'))
const n3 = parseInt(prompt('enter 3th num'))
isEven(n1, n2, n3)

function sign(num){
    if(num > 0){
        console.log('the number is positive')
    }else if(num < 0){
        console.log('the number is negitive')
    }else{
        console.log('the number is zero')
    }
}
const signOfNum1 = parseInt(prompt('enter a number'))
sign(signOfNum1)
const signOfNum2 = parseInt(prompt('enter a number'))
sign(signOfNum2)
const signOfNum3 = parseInt(prompt('enter a number'))
sign(signOfNum3)
const signOfNum4 = parseInt(prompt('enter a number'))
sign(signOfNum4)

function selector(n, a){
    if(a < 18){
        console.log( n + ' You cannot enter')
    }else if(a >= 18){ 
        console.log( n + ' You can enter')
    }else{
console.log('wrong output')
    }
}
const thename = prompt('enter your name')
const age = parseInt(prompt('enter a age'))
selector(thename, age)

function callSelector(n1, a1, func){
    selector(n1, a1)

}
const thename1 = prompt('enter your name')
const age1 = parseInt(prompt('enter a age'))
callSelector(thename1, age1, selector)
const thename2 = prompt('enter your name')
const age2 = parseInt(prompt('enter a age'))
callSelector(thename2, age2, selector)

function modulo(dual){
    if((dual%2) > 0){
        console.log('the number ' + dual + ' is not dual')
    }else{
        console.log('the number ' + dual + ' is dual')
    }
}
const numDual = parseInt(prompt('lets chek if this number is dual'))
modulo(numDual)


