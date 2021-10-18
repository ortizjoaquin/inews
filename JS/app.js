// OUTSIDE WINDOW ONLOAD
// AUTO WRITING NAME
var getName = ()=>{
  var userName = document.getElementById('name').value;
  document.getElementById('userName').innerHTML=userName;
}

// ON KEY NAME
var lettersAndSpaceOnly = /^[ña-zÑA-Z\s]/

function validateKeyName(e){
  return lettersAndSpaceOnly.test(e.key)
}

// HIDE ERROR FUNCTION
function hideError(errorMessage){
  console.log(errorMessage)
  errorMessage.style.display='none';
}

// remember, in this case nameValue = name.value
// Name validation
function checkName(nameValue){
  var spaceBetween = nameValue.indexOf(' ');
  if (nameValue === '' || nameValue === null || nameValue.length <= 6 || spaceBetween < 0 || nameValue.startsWith(' ') || nameValue.endsWith(' ')) {
    return false
  }
  return true
}

// remember, in this case emailValue = email.value
// Email validation
function checkEmail(emailValue){
    var atSymbol = emailValue.indexOf("@");
    if(atSymbol < 1){
      return false;
    }
    var domain = emailValue.slice(atSymbol);
    var dot = domain.indexOf(".");
    if(dot < 0 || dot <= 2){
      return false;
    }
    if (emailValue.endsWith('.') || emailValue.startsWith('.')){
      return false;
    }    
    return true;
}

window.onload=function(){
  // INPUTS VARIABLES
  var name = document.getElementById('name')
  var email = document.getElementById('email')
  // var password = document.getElementById('password')
  // var confirmPassword = document.getElementById('confirmPassword')
  // var age = document.getElementById('age')
  // var phone = document.getElementById('phone')
  // var adress = document.getElementById('adress')
  // var city = document.getElementById('city')
  // var postalCode = document.getElementById('postalCode')
  // var id = document.getElementById('id')
  // var form = document.getElementById('form')
  
  // ERROR VARIABLES
  var nameError = document.getElementById('nameError')
  var emailError = document.getElementById('emailError')
  // var password = document.getElementById('password')
  // var age = document.getElementById('age')
  // var phone = document.getElementById('phone')
  // var adress = document.getElementById('adress')
  // var city = document.getElementById('city')
  // var postalCode = document.getElementById('postalCode')
  // var id = document.getElementById('id')
  // var form = document.getElementById('form')
  
  // VALIDATING FUNCTIONS
  name.addEventListener('blur', function(){
    if (checkName(name.value)===false) {
      nameError.innerText = 'Error, please type full name with more than 6 letters and a space in between';
      nameError.style.display='block';
    }
  });
  name.addEventListener('focus', function(){hideError(nameError)});

  email.addEventListener('blur', function(){
    if (checkEmail(email.value)===false){
      emailError.innerText = 'Error, please type a valid email';
      emailError.style.display='block';
    }
  });
  email.addEventListener('focus', function(){hideError(emailError)})
  
  
}