var a = [1,2,3,4]

// console.log(a.length)

var signupform = document.forms[0]

signupform.addEventListener('submit', (e) => {
    e.preventDefault();
})

var username = signupform[0].value

console.log(username)
console.log(signupform.getAttribute('data-form-type'))
// for(let i in signupform.length){
//     console.log(i, signupform[i].value)
// }
// console.log(signupform.length)
// console.log(signupform[0].value)
// console.log(signupform[0].value)