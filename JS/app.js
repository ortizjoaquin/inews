var lettersAndSpaceOnly = /^[ña-zÑA-Z\s]/

window.onload=function(){
  // INPUTS VARIABLES
  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var password = document.getElementById('password')
  var confirmPassword = document.getElementById('confirmPassword')
  var age = document.getElementById('age')
  var phone = document.getElementById('phone')
  var adress = document.getElementById('adress')
  var city = document.getElementById('city')
  var postalCode = document.getElementById('postalCode')
  var id = document.getElementById('id')
  var form = document.getElementById('form')
  
  // ERROR VARIABLES
  var nameError = document.getElementById('nameError')
  // var email = document.getElementById('email')
  // var password = document.getElementById('password')
  // var age = document.getElementById('age')
  // var phone = document.getElementById('phone')
  // var adress = document.getElementById('adress')
  // var city = document.getElementById('city')
  // var postalCode = document.getElementById('postalCode')
  // var id = document.getElementById('id')
  // var form = document.getElementById('form')
  
  
  // VALIDATING FUNCTIONS
  // Name validation
  function checkName(){
    var spaceBetween = name.value.indexOf(' ')
    console.log(name.value.length)
    if (name.value === '' || name.value === null || name.value.length <= 6 || spaceBetween < 0 || spaceBetween === 0 || spaceBetween === name.value.length-1) {
      nameError.innerText = 'Error, please type full name with more than 6 letters and a space in between';
      nameError.style.display='block';
    }
  }
  function hideError(){
    nameError.style.display='none';
  }
  name.addEventListener('blur', checkName);
  name.addEventListener('focus', hideError)
}

// OUTSIDE WINDOW ONLOAD

//AUTO WRITING NAME
var getName = ()=>{
  var userName = document.getElementById('name').value;
  document.getElementById('userName').innerHTML=userName;
}

//ON KEY NAME
function validateKeyName(e){
  return lettersAndSpaceOnly.test(e.key)
}