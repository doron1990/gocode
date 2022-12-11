

// //ex1
// // const inpt = document.createElement('input')
// // inpt.innerHTML = ('<input type="text" id="myText">')
// // document.body.appendChild(inpt)

// const btn = document.createElement('button')
// btn.innerHTML = ('<button onclick="show()">Try it</button>')
// document.body.appendChild(btn)

// // const txt = document.createElement('p')
// // txt.innerHTML = ('<p id="demo"></p>')
// // document.body.appendChild(txt)

// function show() {
//     var x = document.getElementById("myText").value;
//     alert(x)
//     // document.getElementById("demo").innerHTML = x;
// }
// //ex2
// function showCoords(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     var coords = "X coords: " + x + ", Y coords: " + y;
//     document.getElementById("demo").innerHTML = coords;
// }
// function clearCoor() {
//     document.getElementById("demo").innerHTML = "";
//   }
 
//ex4
// const arr = [1, 2, 3, 5, 6, 7, 9]
// document.getElementById("demo").innerHTML = arr;
// const rmv = document.createElement('button')
// rmv.innerHTML = ('<button onclick="remove()">Remove</button>')
// document.body.appendChild(rmv)
//  function remove(){
//      arr.pop()
//      document.getElementById("demo").innerHTML = arr;
//  }

//ex5

//********* זה לא עבד לי אשמח להבין איפה הטעות */
// const blue = document.createElement('button')
// blue.innerHTML = ('<class="bgc">Blue</button>')
// document.body.appendChild(blue)
// const red = document.createElement('button')
// red.innerHTML = ('<class="bgc">Red</button>')
// document.body.appendChild(red)
// const green = document.createElement('button')
// green.innerHTML = ('<class="bgc">Green</button>')
// document.body.appendChild(green)
// const pink = document.createElement('button')
// pink.innerHTML = ('<class="bgc">Pink</button>')
// document.body.appendChild(pink)


// const buttons = document.querySelectorAll(".bgc")
// buttons.forEach(function(element){
//     element.addEventListener('click', function(event){
//         document.body.style.backgroundColor = 'blue'    })
// })


//******************         זה עובד       */
// const buttons = document.querySelectorAll("button")
// buttons.forEach(function(element){
//     element.addEventListener('click', function (event) {
//         const txt = element.innerText;
//         if (txt === "blue") {
//             document.body.style.backgroundColor = 'blue'
//         }
//         if (txt === "red") {
//             document.body.style.backgroundColor = 'red'
//         }
//         if (txt === "green") {
//             document.body.style.backgroundColor = 'green'
//         }
//         if (txt === "pink") {
//             document.body.style.backgroundColor = 'pink'
//         }
//     })
// })

//ex6
// const arrColors = ["yellow", "green", "pink", "red"]
// document.getElementById("demo").innerHTML = arrColors;

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// setInterval(function () {
//     const random = getRandom(1, arrColors.length)
//     document.body.style.backgroundColor = arrColors[random]
// }, 2000);

//ex search

// function searchList() {
//     const list = document.getElementsByTagName("ul")
//     const items = document.getElementsByTagName("li")
//     for (i = 0; i < items.length; i++) {

        
//     }
// }

function searchList() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementsByTagName("ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


