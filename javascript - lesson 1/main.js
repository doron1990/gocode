

let myAge = 32 
myAge += 5
console.log(myAge)
myAge -= 15
console.log(myAge)
myAge *= 2
console.log(myAge)
myAge /= 4
console.log(myAge)
myAge %= 5
console.log(myAge)
myAge **= 5
console.log(myAge)

const myFirstName = 'Doron'
const myLastName = ' Persik'
const myFullName = myFirstName + myLastName
console.log(myFullName)

let num = 10
let num2 = 2
let result = (num * num2 - 2) 
console.log(result)

let unDefined
console.log(unDefined)

let number1 = parseInt(prompt("please enter a number"))
let number2 = parseInt(prompt("please enter a  second number"))
console.log('the sum is - ' ,number1 + number2)
console.log('the remainder is - ' ,number1 % number2)
console.log('the exponent is - ' ,number1 ** number2)

//console.log(notDefined)

let number3 = prompt("please enter a number")
let number4 = prompt("please enter a  second number")
console.log(number3 + number4)

console.log(pet)




//****************************************************
//תירגול שיעור 2
//****************************************************


const temp = parseInt(prompt("please enter a temp"))
if(temp < 20){
    console.log('take a Winter jacket')
}else if(temp >= 20 && temp < 25){
    console.log('take a sweater')
}else if(temp >= 25 && temp < 40){
    console.log('wear short clothing')
}else if(temp >= 40){
    console.log('go to the beach')
}else{
    console.log('wrong output')
}

let day = prompt("please enter this day")
let time =parseInt(prompt("what time it is?"))
if (day === 'sunday' || 'monday' || 'tuseday' || 'Wednesday' || 'Thursday' ){
    if (time >= 8 && time < 16){
        console.log('go to work')
    }else if(time >= 16){
        console.log('do whatever you want')
    }else{
        console.log('wrong output')
    }
}else if(day === 'friday'){
    console.log('spent time with your freinds')
}else if(day ===   saturday)  {
    console.log('spent time with your family')
}else{
    console.log('wrong output')

}

