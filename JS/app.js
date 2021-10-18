// OUTSIDE WINDOW ONLOAD
// AUTO WRITING NAME
var getName = ()=>{
  var userName = document.getElementById('name').value;
  document.getElementById('userName').innerHTML=userName;
}

// RegExp
var lettersAndSpaceOnly = /^[ña-zÑA-Z\s]/;
var mustContainLettersAndNumbers = /^(?=.*[0-9])(?=.*[a-zA-Z])/;

// ON KEY NAME
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
    if(emailValue.endsWith('.') || emailValue.startsWith('.')){
      return false;
    }
    return true;
  }

// remember, in this case passwordValue = password.value
// Password validation
function checkPassword(passwordValue){
  if(!mustContainLettersAndNumbers.test(passwordValue)){
    return false;
  }
  if (passwordValue === '' || passwordValue === null || passwordValue.length <= 8) {
    return false;
  }
  return true;
}

// remember, in this case confirmPasswordValue = confirmPassword.value
// Confirm password validation
function checkConfirmPassword(confirmPasswordValue){
  if (confirmPasswordValue === password.value) {
    return true;
  }
  else {
    return false;
  }
}

window.onload=function(){
  // INPUTS VARIABLES
  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var password = document.getElementById('password')
  var confirmPassword = document.getElementById('confirmPassword')
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
  var passwordError = document.getElementById('passwordError')
  var confirmPasswordError = document.getElementById('confirmPasswordError')
  // var age = document.getElementById('age')
  // var phone = document.getElementById('phone')
  // var adress = document.getElementById('adress')
  // var city = document.getElementById('city')
  // var postalCode = document.getElementById('postalCode')
  // var id = document.getElementById('id')
  // var form = document.getElementById('form')
  
  // VALIDATING FUNCTIONS
  // Name validation (blur and focus)
  name.addEventListener('blur', function(){
    if (checkName(name.value)===false) {
      nameError.innerText = 'Please type full name (first and last name separated by a space and at least 6 letters long)';
      nameError.style.display='block';
    }
  });
  name.addEventListener('focus', function(){hideError(nameError)});

  // Email validation (blur and focus)
  email.addEventListener('blur', function(){
    if (checkEmail(email.value)===false){
      emailError.innerText = 'Please type a valid email';
      emailError.style.display='block';
    }
  });
  email.addEventListener('focus', function(){hideError(emailError)})
  
  // Password validation (blur and focus)
  password.addEventListener('blur', function(){
    if (checkPassword(password.value)===false){
      passwordError.innerText = 'Please type a valid password';
      passwordError.style.display='block';
    }
  });
  password.addEventListener('focus', function(){hideError(passwordError)})

  // Confirm password validation (blur and focus)
  confirmPassword.addEventListener('blur', function(){
    if (checkConfirmPassword(confirmPassword.value)===false){
      confirmPasswordError.innerText = 'Passwords are not the same';
      confirmPasswordError.style.display='block';
    }
  });
  confirmPassword.addEventListener('focus', function(){hideError(confirmPasswordError)})

}