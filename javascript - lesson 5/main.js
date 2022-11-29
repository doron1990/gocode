
// //ex1
// function last2Char(str){
//     return str.slice(str.length-2)
// }
// const tweChar = last2Char('qwerab90ד')
// console.log(tweChar)

// //ex2
// function oneCharAtTheTime(str){
//     for(i = 0; i < str.length; i++){
//         console.log(str[i])
//     }
// }
// const str = prompt('please enter a string')
// oneCharAtTheTime(str)

// //ex3
// function xTimesChar(str, char){
//     let amount = 0
//     for(i = 0; i < str.length; i++){
//         if(str[i] === char){
//             amount += 1
//         }
//     }
//     return amount
// }
// const char = xTimesChar('pppololol', 'p')
// console.log(char)

// //ex4
// function mergeStrings(str1, str2){
//     let str3 = ''
//     for(i = 0; i < str1.length; i++){
//         str3 += str1[i] + str2[i]
//     }
//     return str3
// }
// const merge = mergeStrings('abc', 'xyz')
// console.log(merge)

// //ex5
//     function mergeStrNotEquals(str1, str2){
//         let finalStr = ''
//         let tailStr = ''
//         if(str1.length > str2.length){
//             loopLength = str2.length
//             tailStr = str1.slice(str2.length)
//         }else if(str2.length > str1.length){
//             loopLength = str1.length
//             tailStr = str2.slice(str1.length)
//         }else{
//             loopLength = str1.length
//         }
//         for(i = 0; i < loopLength; i++){
//             finalStr += str1[i] + str2[i] 
//         }
//         return finalStr += tailStr    
//     }
//     const mergeDiff = mergeStrNotEquals('abcdef', 'wxyziop')
//     console.log(mergeDiff)

// //ex6
// function unique(str){
//     let finalStr = ''
//     for(i = 0; i < str.length; i++){
//         let exists = false
//         for(j = 0; j < finalStr.length; j++){
//             if(str[i] === finalStr[j]){
//                 exists = true
//                 break
//             }
//         }
//         if(exists){
//             continue
//         }
//             finalStr += str[i]
//     }
//     return finalStr
// }
// const uniqueStr = unique('qqqwerdfggmmdcc')
// console.log(uniqueStr)

// //ex7
// function firstUnique(str){
//     let finalChar = 'there is no Uniqe char'
//     for(i = 0; i < str.length; i++){
//         if (str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             finalChar = str[i]
//             break
//         }
//     } return finalChar
// }
// const first = firstUnique('waxxabbccddv')
// console.log(first)

let text = "Is this all there is?";
let result = text.search(/is/g);
console.log(result)


 

