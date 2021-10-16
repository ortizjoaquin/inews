const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const age = document.getElementById('age')
const phone = document.getElementById('phone')
const adress = document.getElementById('adress')
const city = document.getElementById('city')
const postalcode = document.getElementById('postalcode')
const id = document.getElementById('id')
const form = document.getElementById('form')

const errorName = document.getElementById('errorname')

form.addEventListener('submit', (e) => {
  validarFormulario(e)
})

var getName = ()=>{
  var userName = document.getElementById('name').value;
  document.getElementById('userName').innerHTML=userName;
}

// validating functions

function validarFormulario(e){
  let messages=[]
  const regex = /\d/;
  console.log(regex.test(e.target.name.value));
  if (e.target.name.value === '' || e.target.name.value === null) {
    messages.push('Full name is required')
  }

  if (e.target.name.value.length <= 6 && e.target.name.value.length > 0) {
    messages.push('Full name must contain at least 6 letters')
  }

  if (messages.length > 0) {
    e.preventDefault()
    console.log(errorName);
    errorName.innerText = messages
  }
}