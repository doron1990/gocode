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

const getProducts = async function () {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const answer = await response.json();  
        const user = answer.results[0]
        const obj = Object.entries(user)
        for (const [key, value] of Object.entries(user)) {
            if (typeof (value) === 'object') { 
                for (const [key2, value2] of Object.entries(value)) { 
                    let k = document.createElement('p')
                    k.innerHTML = `${key2}, ${value2}`
                    document.body.appendChild(k)
                }
            }
            if (typeof (value) !== 'object') { 
                let k = document.createElement('p')
                k.innerHTML = `${key}, ${value}`
                document.body.appendChild(k)
            }
          }
    } catch (error) {
      console.log(error);
    }
  };
getProducts();
  
const btn = document.createElement('button')
btn.innerHTML = ('<button>shou user</button>')
document.body.appendChild(btn)
btn.addEventListener('click', function () {
    getProducts();
})