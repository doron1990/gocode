

// //ex 1
// const cat = {
//     name: "tom",
//     age: "8",
//     behavior: "lazy",
//     color: "black",
//     voice: function () {
//         console.log('miew')
//     }

// }
// cat.voice()
// console.log(cat)

// //ex2
// function addProperty() {
//     const key = prompt('whate property do you want')
//     const value = prompt('whate it is')
//     cat[key] = value

// }
// addProperty()
// console.log(cat)

// //ex 3
// function catName(object, name1) {
//     if (object.name === name1) {
//         return true
        
//     }return false
// }
// console.log(catName(cat, "tom"))

// //ex4
// function mergeObject(obj1, obj2) {
//     //    const obj3 = Object.assign({}, obj1, obj2)
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


// //ex5
// const fiveCats = {}
// for (i = 1; i < 6; i++){
//     let cat = 'cat' + i
//     fiveCats[cat] = {}
//     fiveCats[cat].color = prompt('please insert a cat color')
// }
// console.log(fiveCats)

// //ex 6 
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

// //array ex1
// function setArrayLength(number) {
//     const array = []
//     array.length = number
//     return array
// }
// const getArray = setArrayLength(prompt('please enter a number'))
// console.log(getArray.length)

// //array ex 2
// function doubled(arr) {
//         const arrayX2 = arr.concat(array)
//         return arrayX2
//     }
//     const array = [1,2,3,4,5,6,7]
//     const doubledArray = doubled(array)
//     console.log(doubledArray)

// //array ex 3 
// function reverseArray(arr) {
//         let arr2= []
//         for (i = 0; i < arr.length; i++){
//         arr2.unshift(array[i])
//     }
//     return arr2
        
//     }
//     let array = [1, 2, 3, 4, 5, 6, 7, 90]
//     const array2 = reverseArray(array)
//     console.log(array2)
//     console.log(array)


// //array ex 4
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

// //array ex 5

// function fourDog(){
//         const array = []
//         for (i = 0; i < 4; i++){
//             let doggy = {
//                 eyeColor: prompt('enter a eye color'),
//                 weight: parseInt(prompt('enter a weight')),
//                 age: parseInt(prompt('enter a age'))
//         }
//             array.push(doggy)
//     }
//     console.log(array)
    
//     }
//     fourDog()



















