//ex search
const inpt = document.querySelector('input')
inpt.addEventListener('keyup', function (e) {
    const txt = e.target.value
    const lis = document.querySelectorAll('li')
    lis.forEach(function (item) {
        if (item.innerText.indexOf(txt) != -1) {
            item.style.display = 'block'
        }
        else {       
        item.style.display = 'none'
        }
    })
    let write;
    const lis2 = document.querySelectorAll('li')
    Array.from(lis2).forEach(function (e) {
        if (window.getComputedStyle(e).display === "block") {write = true}
    })
    if (write) {
        document.querySelector(".no-result").style.display = 'none';
      } else {
        document.querySelector(".no-result").style.display = 'block';
      }

})