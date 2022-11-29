// let unDefined
// console.log(undefined)
// if (!(undefined)){
//     console.log('undefined === 0')
// }

// let a = unDefined + 20
// console.log(a)
// if (!(a)){
//     console.log('NaN === 0')
// }

// let b = null
// console.log(b)
// if (!(b)){
//     console.log('Null === 0')
// }
// b+=10
// console.log(b)

// function itsMincha(a){
//     if(a == parseInt(a)){
//         if(a === 13){
//             console.log('pray in work')
//         }else if(a > 13 && a <= 18){
//             console.log('pray at home')
//         }else if(a > 18){
//             console.log('you lost')
//         }else if(a < 13){
//             console.log('its not time yet')
//         }
//     }else {
//         console.log('wrong output')
//     }
    
// }
// k = parseInt(prompt('please enter the time'))
// itsMincha(k)


//test from freecodecamp

// const conversation = "'Finn exclaims to Jake, \"Algebraic!\""
// console.log(conversation)
// let n = 123
// n[0] = 2
// console.log(n)


// function selector(n, a, fromFunc){
//     if(a < 18){
//         if(!(fromFunc)){ 
//             console.log( n + ' You cannot enter')
//         }
        
//         return result = n + ' You cannot enter'
//     }else if(a >= 18){ 
//         if(!(fromFunc)){ 
//             console.log( n + ' You can enter')
//         }
        
//         return result = n + ' You can enter'
//     }else{
//         if(!(fromFunc)){ 
//             console.log( n + 'wrong output')
//         }
// return result = ' wrong output'
//     }
// }
// // const thename = prompt('enter your name')
// // const age = parseInt(prompt('enter a age'))
// //selector(thename, age)

// function callSelector(n1, a1, func){
//     console.log('The function callSelector is activeted ' + selector(n1, a1, 1))

// }
// const thename1 = prompt('enter your name')
// const age1 = parseInt(prompt('enter a age'))
// callSelector(thename1, age1, selector)
// const thename2 = prompt('enter your name')
// const age2 = parseInt(prompt('enter a age'))
// callSelector(thename2, age2, selector)

// let personalInformation = [
//     'doron persik' ,
//     32,
//     'petah tikva',
//     'dog'
// ]
// console.log(personalInformation)
// //console.log(pet === personalInformation.myPet)

// newPerson = {
//     myName: 'avital persik',
//     myAge: 30,
//     myAddress:  'petah tikva',
//     myPet: 'perrot'
// }
// console.log(newPerson)

// personalInformation.push(newPerson)
// console.log(personalInformation[1])

// let employees = ['doron', 'avital', 'nehoray', 'noam'] 
// console.log(employees[0])

// // var two = 2;
// // var three = two += 1;
// // alert(two + ' ' + three);

// // two = 2;
// // three = two++;
// // alert(two + ' ' +  three);

// // two = 2;
// // three = ++two;
// // alert(two + ' ' +  three);

// // two = 2;
// // three = two + 1;
// // alert(two + ' ' +  three);

// const drink = 'coffee'
// otherDrink()

// function otherDrink(){
//     const drink = 'tea'
//     function favDrink(s){
//         return drink
//     }
//     const a = favDrink(drink)
//     console.log(a)
// }

// //rull 1 
// const person = {
//     name: 'doron',
//     sayMyName: function(){
//         console.log('my name is ' + this.name)
//     },

// }
// person.sayMyName()

// //rull 2
// function sayMyName(){
//     console.log('my name is ' + this.name)
// }
// sayMyName.call(person)

// //rull 3
// function pers(name){
//     this.name = name
// }
// const p1 = new pers('dor')
// console.log(p1.name)

// //rull 4
// const name = 'avital'
// sayMyName()

// const arr = ["doron", "avital", "nehoray", "noam"]
// const arr2 = ["netanel", "carmal"]
// const arr3 = ["10","18", "9", "25", "19"]

// let i = 0
// console.log(arr)
// console.log(arr[1])
// arr[1] = "Avital"
// arr[0] = "Doron"
// let name1 = arr[2]
// arr[2]= arr[2][i].toUpperCase() + arr[2].slice(i+1).toLowerCase()
// console.log(arr)
// let istrue = Array.isArray(arr)
// console.log(istrue)
// let joined = arr2.concat(arr)
// console.log(joined)
// let con = arr.constructor
// console.log(con)
// const fruits = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
// //fruits.copyWithin(2, 0);
// console.log(fruits)
// let iter = fruits.entries() // ????
// fruits.fill("Kiwi", 2, 4)  
// console.log(fruits)

// function over18(age) {
//     return age >= 18
// }
// const valid = arr3.filter(over18)
// console.log(valid.sort())
// console.log(typeof(valid))


// function mergeObject(obj1, obj2) {
//     let obj3 = {}
//     for (key in obj1) {
//         obj3[key] = obj1[key]
//     }
//     for (key in obj2) {
//         obj3[key] = obj2[key]
//     }
//     console.log(obj3)
// }
// const bunny = {
//     name: "bags",
//     age: "5",
//     food: "carrot"
// }
// const boy = {
//     name2: "jon",
//     age2: "12",
//     food2: "ice cream"
// }
// mergeObject(boy, bunny)

// const fiveCats = {}
// for (i = 1; i < 6; i++){
//     let cat = 'cat' + i
//     fiveCats[cat] = {}
//     fiveCats[cat].color = prompt('please insert a cat color')
// }
// console.log(fiveCats)

// const threeCats = {}
// for (i = 1; i < 4; i++){
//     let cat = 'cat' + i
//     threeCats[cat] = {}
//     threeCats[cat].name = prompt('please insert a cat name')
// }
// function chekName(obj, name) {
//     for (i = 1; i < 4; i++){
//         let cat = 'cat' + i
//         if (obj[cat].name === name) {
//             return true
//         }
//     } return false
// }
// const Name = prompt('please enter a name')
// const trueOrFalse = chekName(threeCats, Name)
// console.log(trueOrFalse)

// const arr = []
// const length =  prompt('enter length')
// arr.length = length
// console.log(arr.length)

// function setArrayLength(number) {
//     const array = []
//     array.length = number
//     return array
// }
// const getArray = setArrayLength(prompt('please enter a number'))
// console.log(getArray.length)

// function doubled(arr) {
//     const arrayX2 = arr.concat(array)
//     return arrayX2
// }
// const array = [1,2,3,4,5,6,7]
// const doubledArray = doubled(array)
// console.log(doubledArray)


// function reverseArray(arr) {
//     let arr2= []
//     for (i = 0; i < arr.length; i++){
//     arr2.unshift(array[i])
// }
// return arr2
    
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 90]
// const array2 = reverseArray(array)
// console.log(array2)
// console.log(array)

// function followingValue(arr) {
//     let array = []
//     array[0] = parseInt(prompt('enter num'))
//     for (i = 1; i < 10; i++){
//     array.push(array[i-1] + 1) 
// }
//     return array
// }
// const setArray = []
// followingValue(setArray)

// function fourDog(){
//     const array = []
//     for (i = 0; i < 4; i++){
//         let doggy = {
//             eyeColor: prompt('enter a eye color'),
//             weight: parseInt(prompt('enter a weight')),
//             age: parseInt(prompt('enter a age'))
//     }
//         array.push(doggy)
// }
// console.log(array)

// }
// fourDog()

// function mergeObject(obj1, obj2) {
//     const obj3 = Object.assign({}, obj1, obj2)
    
//     // for (key in obj1) {
//     //     obj3[key] = obj1[key]
//     // }
//     // for (key in obj2) {
//     //     obj3[key] = obj2[key]
//     // }
//     console.log(obj3)

// }

// const bunny = {
//     name: "bags",
//     age: "5",
//     food: "carrot"
// }
// const boy = {
//     name2: "jon",
//     age2: "12",
//     food2: "ice cream"
// }
//mergeObject(boy, bunny)

const pats = [
    {
        name: "bunny",
        age: 5,
        food: "carrot"
    },
    {
        name: "cat",
        age: 8,
        behavior: "lazy",
        color: "black",
    },
    {
        name: "dog",
        age: 10,
        behavior: "cute",
        color: "brown",
    }
]


// const names = pats.map(function (obj) {
//     return obj.name
// })
// console.log(names)

// const o5 = pats.filter(function(obj){    return obj.age > 5
// })    //.map(function(obj){return obj.age})
//console.log(o5)




// const pizza = {
//     country: "italy",
//     extra: "olives" 
// }
// const baget = {
//     country: "france"
// }
// const chummus = {
//     country: "lebanon"
// }
// const jachnun = {
//     country: "yamman"
// }

// let arr = Object.values(pizza)
// console.log(arr)
// arr = Object.entries(pats)
// console.log(arr)
// arr = pats.map(function (obj) {
//     let arrt = []
//     // arrt.push(obj.name)
//     // arrt.push(obj.age)
//     for (key in obj) {
//         arrt.push(obj[key])
//     }

//     return arrt
// })
// console.log(arr)
// const obj4 = Object.assign({}, [1,2,3,4,5])
// console.log(obj4)
//  console.log(typeof(obj4))

// const student = {
//     name: "doron",
//     age: "32",
//     occupation: "programer",
//     course: "javascript"
// }
// const property = Object.keys(student)
// console.log(property)
// // delete student.course
// // console.log(student)
// const length = Object.keys(student).length
// console.log(Object.keys(student).length)

var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

// for (i = 0; i < library.length; i++){
//     console.log('the book "' + library[i].title + '" writed by "' + library[i].author + '"')
//     if (library[i].readingStatus) {
//         console.log('are reads')
//     } else {
//         console.log('are not reads')
//     }
// }
// let arr = []
// for (i = 0; i < library.length; i++){
//     arr.push(Object.entries(library[i]))
// }
// console.log(arr)

// const helper = (a, b) => ({
//     'numbernumber': a-b,
//     'stringnumber': 1,
//     'numberstring': -1,
//     'stringstring': a > b ? 1 : -1
//   }[typeof(a) + typeof(b)]);
  
  
//a = ['b', 2, 'c', 'a', 1, 3, 'hello', 1009];
//a.sort(helper);
// console.log(a);

// a.sort(function (a, b) {
//     //console.log(a + '' + b)
//     if (typeof a === 'number' && typeof b === 'number')
//     {
//         return a-b
//     }
//     if (typeof a === 'string' && typeof b === 'number') {
//         return 1
//     }
//     if (typeof a === 'number' && typeof b === 'string') {
//         return -1
//     }
//     if (typeof a === 'string' && typeof b === 'string') {
//         return (a > b ? 1 : -1)
        
//     }

// })
// console.log(a);

  
// // problem:  Sort this array:
// let myarr1 = [1, 'ss', 11, 2, 'aa'];

// function compareNumbers(a, b) {

//   if (typeof a === 'number' && typeof b === 'number') {
//     return a - b;
//   }
//   // check for num vs string
//   if (typeof a === 'number' && typeof b === 'string') {
//     return -1;
//   }
//   // check for string vs num
//   if (typeof a === 'string' && typeof b === 'number') {
//     return 1;
//   }
//   // check for string vs string
//   if (typeof a === 'string' && typeof b === 'string') {
//     if (a < b) return -1;
//     else return 1;
//   }
//   return 0;
// }
// myarr1.sort(compareNumbers);
// console.log(myarr1);
// myarr1.sort(function (a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a - b;
//       }
//       // check for num vs string
//       if (typeof a === 'number' && typeof b === 'string') {
//         return -1;
//       }
//       // check for string vs num
//       if (typeof a === 'string' && typeof b === 'number') {
//         return 1;
//       }
//       // check for string vs string
//       if (typeof a === 'string' && typeof b === 'string') {
//         if (a < b) return -1;
//         else return 1;
//       }
//       return 0;
// })
// console.log(myarr1);

// let arr1 = [1, 2, 3, 4, 5]
// arr1.forEach(function(item){
//     console.log(item + 10) 
// })
// const arr2 = arr1.map(function (item) {
//     return item +20
// })
// console.log(arr2)

// const Animals = ["Horse", "Cow", "Sheep", "Donkey"]
// const deleteAnimals = ["Cow", "Sheep"]
// function delAnimals(arr1, arr2) {
//     const diffrent = arr1.filter(function (item) {
//         return !(arr2.includes(item))
//     })
//     return diffrent
// }
// const selectedAnimals = delAnimals(Animals, deleteAnimals)
// console.log(selectedAnimals)
//console.log(A.filter(n => !B.includes(n)))


// const arr = ["a", "b", "c", "d", "e"];
// console.log(arr.values())
// const iterator = arr.values();
// for (const a of iterator) {
//     console.log(a)
// }
// console.log(typeof(iterator)); // Array Iterator { }
// console.log(iterator.next().value); // "a"
// arr[1] = "n";
// console.log(iterator.next().value); // "n"

// const shoppingList = ['80', '9', '700', '1', '1111', '11111', 'bc', 'a','brad', 'fruit', 'coffee', 'milk', 'avocado', 12345678, 5, 6, 12, 6.2, true, false, NaN, null]
// function orderList(arr, direction) {
//     arr.sort(function (a, b) {
//         if (!isNaN(a) && (!isNaN(b))) { // <== if both are numbers
//             return a - b
//         } else if (!isNaN(a) && isNaN(b)) { // <== if a are number and b are string
//             return 1
//         } else if (isNaN(a) && !isNaN(b)) { // <== if a are string and b are are nuber
//             return -1
//         } else if (isNaN(a) && isNaN(b)) { // <== if both are strings
//             return a > b ? 1 : -1
//         }
//     })
//     if (direction === 'down') {
//         arr.reverse()
//     }
//     return arr
// }
// const direction = prompt('up or dowm')
// const sortedList = orderList(shoppingList, direction)
// console.log(sortedList)



// function sum(n, obj) {
//     let s = obj.age + n
//     console.log(s)
//     return s
// }
// const sumAge = pats.reduce(function (total, obj) {
//     return (total + obj.age)
// }, 0)
// console.log(sumAge)

const arr = [1, 2, 3, 4, 5, 1]
// const obj = Object.assign({}, library)
// console.log(obj)
const sum = arr.reduce(function (total,value) {
    return total + value + ' '
},'')
console.log(sum)
const remuveDupllicate = arr.reduce(function (array, item) {
    if (array.indexOf(item) === -1) {
         array.push(item)
    }
    return array
    
}, [])
console.log(remuveDupllicate)

