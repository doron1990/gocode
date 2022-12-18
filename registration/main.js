// //ex search
// const inpt = document.querySelector('input')
// inpt.addEventListener('keyup', function (e) {
//     const txt = e.target.value
//     const lis = document.querySelectorAll('li')
//     lis.forEach(function (item) {
//         if (item.innerText.indexOf(txt) != -1) {
//             item.style.display = 'block'
//         }
//         else {       
//         item.style.display = 'none'
//         }
//     })
//     let write;
//     const lis2 = document.querySelectorAll('li')
//     Array.from(lis2).forEach(function (e) {
//         if (window.getComputedStyle(e).display === "block") {write = true}
//     })
//     if (write) {
//         document.querySelector(".no-result").style.display = 'none';
//       } else {
//         document.querySelector(".no-result").style.display = 'block';
//       }

// })

// const getProducts = async function () {
//     try {
//       const response = await fetch("https://randomuser.me/api/");
//       const answer = await response.json();  
//         const user = answer.results[0]
//         const obj = Object.entries(user)
//         for (const [key, value] of Object.entries(user)) {
//             if (typeof (value) === 'object') { 
//                 for (const [key2, value2] of Object.entries(value)) { 
//                     let k = document.createElement('p')
//                     k.innerHTML = `${key2}, ${value2}`
//                     document.body.appendChild(k)
//                 }
//             }
//             if (typeof (value) !== 'object') { 
//                 let k = document.createElement('p')
//                 k.innerHTML = `${key}, ${value}`
//                 document.body.appendChild(k)
//             }
//           }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// getProducts();
  
// const btn = document.createElement('button')
// btn.innerHTML = ('<button>shou user</button>')
// document.body.appendChild(btn)
// btn.addEventListener('click', function () {
//     getProducts();
// })
const inputArr = [
    { name: 'title', tag: 'select', nameProperty: 'title', type: '' },
    { name: 'FullName', tag: 'input', placeholder: 'enter your name', nameProperty: 'Name',  type: 'text' },
    { name: 'Phone', tag: 'input', placeholder: 'enter your phone number', nameProperty: 'Phone',  type: 'text' },
    { name: 'Address', tag: 'input', placeholder: 'enter your adress', nameProperty: 'Address',  type: 'texy' },
    { name: 'Student Number', tag: 'input', placeholder: 'enter your student id', nameProperty: 'id',  type: 'text' },
    { name: 'Year Level', tag: 'input', placeholder: 'for incoming', nameProperty: 'year', type: 'text' },
    { name: 'Degree Program', tag: 'select', nameProperty: 'program',  type: '' },
    { name: 'Person to contact in case of emergency', tag: 'input', placeholder: 'enter your contact', nameProperty: 'contact',  type: 'text' },
    { name: 'accept terms', tag: 'input', nameProperty: 'accept terms',  type: 'radio'}
]
const selectArr = [
    { name: 'title', tag: 'option', value: '' },
    { name: 'title', tag: 'option', value: 'mr' },
    { name: 'title', tag: 'option', value: 'ms' },
    { name: 'Degree Program', tag: 'option', value: ''},
    { name: 'Degree Program', tag: 'option', value: 'finance'},
    { name: 'Degree Program', tag: 'option', value: 'computer' }
]

const form = {}

inputArr.forEach(function (item) {
    const para = document.createElement('p')
    para.innerText = item.name
    document.body.appendChild(para)

    const element = document.createElement(item.tag)
    element.name = item.nameProperty
    if (item.tag === 'input' && item.type === '') {
        element.placeholder = item.placeholder
    }
    if (item.tag === 'input' && item.type === 'radio') {
        element.setAttribute("type", "radio");
    }
    document.body.appendChild(element)
    if (item.tag === 'select') {
        selectArr.forEach(function (opt) {
            if (opt.name === item.name) {
                const op = document.createElement('option')
                op.value = opt.value
                op.name = opt.value
                op.innerText = opt.value
                element.appendChild(op)
            }
        })
    }

})

const btn = document.createElement('button')
btn.innerHTML = ('<button>shou user</button>')
document.body.appendChild(btn)
btn.addEventListener('click', function () {
    inputArr.forEach(function (item) {
        const formValue = document.getElementsByName(item.nameProperty)
        form[item.name] = formValue[0].value
        if (item.type === 'radio') {
            const getRadioValue = document.querySelector('input[name="accept terms"]:checked');  
            form[item.name] = 'false'
            if (getRadioValue) {
                form[item.name] = 'true'
            }
        }
    })
    console.log(form)
})
