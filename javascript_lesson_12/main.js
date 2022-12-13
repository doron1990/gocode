

// // //ex1
// const inpt = document.createElement('input')
// inpt.innerHTML = ('<input type="text">')
// document.body.appendChild(inpt)

// const btn = document.createElement('button')
// btn.innerHTML = ('<button onclick="show()">Try it</button>')
// document.body.appendChild(btn)

// function show() {
//     var x = document.querySelector('input')
//     alert(x.value)    
// }
// // //ex2
// const para = document.createElement('p')
// para.innerHTML = ('<p></p>')
// document.body.appendChild(para)

// function showCoords(event) {
//     const x = event.clientX;
//     const y = event.clientY;
//     const coords = "X coords: " + x + ", Y coords: " + y;
//     document.querySelector("p").innerHTML = coords;
// }
// function clearCoor() {
//     document.querySelector("p").innerHTML = "";
// }
// //ex3
// const inpt2 = document.createElement('input')
// inpt2.innerHTML = ('<input type="text">')
// document.body.appendChild(inpt2)

// const btn2 = document.createElement('button')
// btn2.innerHTML = ('<button>img</button>')
// document.body.appendChild(btn2)

// btn2.addEventListener('click', function () {
//     const src = inpt2.value
//     console.log(src)
// })
 
// //ex4
// const para2 = document.createElement('p')
// para2.innerHTML = ('<p class ="arr"></p>')
// document.body.appendChild(para2)

// const arr = [1, 2, 3, 5, 6, 7, 9]
// document.querySelector(".arr").innerHTML = arr;
// const rmv = document.createElement('button')
// rmv.innerHTML = ('<button onclick="remove()">Remove</button>')
// document.body.appendChild(rmv)

//  function remove(){
//      arr.pop()
//      document.querySelector(".arr").innerHTML = arr;
//  }

// //ex5
// const blue = document.createElement('button')
// blue.innerHTML = ('<button>Blue</button>')
// document.body.appendChild(blue)
// const red = document.createElement('button')
// red.innerHTML = ('<button>Red</button>')
// document.body.appendChild(red)
// const green = document.createElement('button')
// green.innerHTML = ('<button>Green</button>')
// document.body.appendChild(green)
// const pink = document.createElement('button')
// pink.innerHTML = ('<button>Pink</button>')
// document.body.appendChild(pink)


// const buttons = document.querySelectorAll("button")
// buttons.forEach(function(element){
//     element.addEventListener('click', function (event) {
//         const txt = element.innerText;
//         document.body.style.backgroundColor = txt
//     })
// })

// //ex6
// const para3 = document.createElement('p')
// para3.innerHTML = ('<p class ="randc"></p>')
// document.body.appendChild(para3)
// const arrColors = ["yellow", "green", "pink", "red", "orange", "blue", "grey", "brown"]
// document.querySelector(".randc").innerHTML = arrColors;

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// setInterval(function () {
//     const random = getRandom(1, arrColors.length)
//     document.body.style.backgroundColor = arrColors[random]
// }, 2000);





