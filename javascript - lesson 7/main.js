
// //ex1
// function powLoop(arr) {
//     let arr2 = []
//     for (i = 0; i < arr.length; i++){
//         arr2[i] = arr[i]**2
//     }
//     return arr2
// }
// const arr = [1, 2, 3, 4, 5]
// const arrPowLoop = powLoop(arr)
// console.log(arrPowLoop)
// const arrPowMap = arr.map(function (item) {
//     return Math.pow(item,2)
// })
// console.log(arrPowMap)

// //ex2
// const shoppingList = ['brad', 'fruit', 'coffee', 'milk', 'avocado']
// function orderList(arr, direction) {
//     direction.toLowerCase()
//     if (direction === 'up') {
//         arr.sort(function (a, b) { return a > b ? 1 : -1 })
//     } else {
//         arr.sort()
//         arr.reverse()
//     }
//     return arr
// }
// const direction = prompt('up or dowm')
// const sortedList = orderList(shoppingList, direction)
// console.log(sortedList)

// //ex3
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 56, 90]

// function showLast(arr, num) {
//     if (num === undefined) {
//         num = 1
//     }
//     if (num > arr.length) {
//         num = arr.length
//     }
//     let a = []
//     a = arr.slice(arr.length - num)
//     a.reverse()
//     return a
// }
// const last = showLast(arr,12)
// console.log(last)

// //ex4 
// let arr = ['ASA', 'dsds', 'S', 'kiho', 'EWa', '12Q', '213']
// function noCapital(arr) {
//     const final = arr.filter(function (item) {
//         let char = item.toLowerCase()
//         if (char === item) {
//             return item
//             }
//         })
//     return final
// }
// const lowerCase = noCapital(arr)
// console.log(lowerCase)

// //ex5
// const str = 'javaScript,'
// function reverseStr(str) {
//     const arr = str.split("")
//     arr.reverse()
//     const str2 = arr.join('')
//     return str2
// }
// const rev = reverseStr(str)
// console.log(rev)

// //ex6
// let arr = ['ASA', 'dsds', 'S', 'kiho', 'EWa', 'dfdfd']
// function palindrome(arr) {
//     const final = arr.filter(function (item) {
//         let char = reverseStr(item)
//         if (char === item) {
//             return item   
//         }
//     })
//     return final
// }

// const arrPalindrome = palindrome(arr)
// console.log(arrPalindrome)

// //ex7
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

// //ex8
// function getRandom(min, max) {
//     // min = Math.ceil(min); 
//     // max = Math.floor(max); 
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function guessTheNamber() {
//     const random = getRandom(1, 6)
//     let arr = []
//     for (num = prompt('enter a number between 1 and 6'); num != random; num = prompt('enter a number between 1 and 6')){
//         arr.push(num)

//     }
//     console.log('the number is ' + num + ' you guess right')
//     return arr
// } 

// const erroreNumbers = guessTheNamber()
// console.log('here the list of wrong guesses ' + erroreNumbers)

// //ex9

// const arr = [67, 2, 3, 21, 11, 111, 1111]
// function orderNum(arr, dir) {
//     let char = dir.toLowerCase()
//     if (dir === 'up') {
//         arr.sort(function (a, b) {
//             return a - b
//         })
//     } else {
//         arr.sort(function (a, b) {
//             return b - a
//         })
//     } return arr
// }
// const direction = prompt('enterr dir')

// const orderN = orderNum(arr,direction)
// console.log(orderN)

// //ex10
// const originArr = [1, 2, 3, 4, 5, 6]
// const arr1 = originArr
// console.log(arr1)
// const arr2 = originArr.slice()
// console.log(arr2)
// const arr3 = originArr.concat()
// console.log(arr3)




