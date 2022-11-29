
//exercise 1
function tenTimes(string){
    for(i = 0; i < 10; i++){
        console.log(string)
    }
}
const stringFromUser = prompt('please enter a string')
tenTimes(stringFromUser)

//exercise 2
function xTimesHello(times){
    for(i = 0; i < times; i++){
        console.log('hello')
    }
}
const hello = parseInt(prompt('please enter how many times i show hello'))
xTimesHello(hello)

//exercise3
function average(){
    let sum = 0
    const amount = parseInt(prompt('please enter how many students we have'))
    for(i = 1; i <=   amount; i++){
        const scores = parseInt(prompt('please enter the ' + i + 'th score'))
        sum += scores
    }
    console.log('the average is ' + sum / amount)
}
average()

//exercise 4
const MultiplicationTable = parseInt(prompt('please enter a number'))
for(i = 1; i <= MultiplicationTable; i++){
    let line = ''
    for(j = 1; j<=10; j++){
        line += i*j + ' ' + '\t'
    }        console.log(line)
}

//exercise5
function untilStop(){
    let words = ''
    for(str = ''; str != 'stop'; str = prompt('please enter a string')){
        
        words += str + ' '
    }
    console.log(words)
}
untilStop()

//exercise6  
function showBigger(){
    let bigger = Number.NEGATIVE_INFINITY
    for(number = parseInt(prompt('please enter a number')); number != -1; number = parseInt(prompt('please enter a number'))){
        if(number > bigger){
            bigger = number 
        }
    }
    if(bigger !== Number.NEGATIVE_INFINITY){
        console.log(bigger)
    }else{
        console.log('there is no number')
    }

}
showBigger()



//exercise 7
function tenTimes(string){
    let i = 0
    while(i < 10){
        console.log(string)
        i++
    }
}
const doStringFromUser = prompt('please enter a string')
tenTimes(doStringFromUser)



function xTimesHello(times){
    let i = 0
    while (i < times){
        console.log('hello')
        i++
    }
}
const hello2 = parseInt(prompt('please enter how many times i show hello'))
xTimesHello(hello2)

function average(){
    let sum = 0
    const amount = parseInt(prompt('please enter how many students we have'))
    let i = 1
    while(i <= amount){
        const scores = parseInt(prompt('please enter the ' + i + 'th score'))
        sum += scores
        i++
    }
    console.log('the average is ' + sum / amount)
}
average()


//exercise8
function untilStop(){
    let sum = ''
    let str = ''
    do{
        sum += str + ' '
        str = prompt('please enter a string')
    }
    while(str != 'stop' && str !== ' ');
    console.log(sum) 

      
}
untilStop()
function showBigger(){
    let bigger = Number.NEGATIVE_INFINITY
    do{
        number = parseInt(prompt('please enter a number'))
        if(number > bigger && number !== -1){
            bigger = number 
        }
    }
    while(number !== -1);
    if(bigger !== Number.NEGATIVE_INFINITY){
        console.log(bigger)
    }else{
        console.log('there is no number')
    }
}
showBigger()






















