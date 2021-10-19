// AUTO WRITING NAME ----------------------------------------------------------------------------------------------
var getName = ()=>{
  var userName = document.getElementById('name').value;
  document.getElementById('userName').innerHTML=userName;
}

// RegExp  ------------------------------------------------------------------------------------------------------------
var lettersAndSpaceOnly = /^[ña-zÑA-Z\s]/;
var numbersOnly = /^[0-9]/;
var lettersNumbersSpacesOnly = /^[ña-zÑA-Z\s0-9]/;
var mustContainNumbers = /^(?=.*[0-9])/;
var mustContainLettersAndNumbers = /^(?=.*[0-9])(?=.*[a-zA-Z])/;
var mustContainLettersNumbersSpaces = /^(?=.*[0-9])(?=.*[a-zA-Z\s])/;
var containSpaces = /\s/;

// OnKey for the name input (only allows you to enter letters and spaces at the name input) ---------------------------
function validateKeyName(e){
  return lettersAndSpaceOnly.test(e.key)
}

// HIDE ERROR FUNCTION (this makes the error messages to be non-displayed as default) ---------------------------------
window.onload=function(){
function hideError(errorMessage){
  //console.log(errorMessage)
  errorMessage.style.display='none';
}

// --------------------------------------------------------------------------------------------------------------------

// DECLARED FUNCTIONS FOR VALIDATING (first declared, later on called to work) ----------------------------------------

// Name validation
// remember, in this case nameValue = name.value
function checkName(nameValue){
  // var spaceBetween = nameValue.indexOf(' ');
  if (nameValue === '' || nameValue === null || nameValue.length <= 6 || spaceBetween < 0 || nameValue.startsWith(' ') || nameValue.endsWith(' ')) {
    return false
  }
  return true
}

// Email validation
// remember, in this case emailValue = email.value
function checkEmail(emailValue){
  // var atSymbol = emailValue.indexOf("@");
  if(atSymbol < 1){
    return false;
  }
  var domain = emailValue.slice(atSymbol);
  // var dot = domain.indexOf(".");
  if(dot < 0 || dot <= 2){
    return false;
  }
  if(emailValue.endsWith('.') || emailValue.startsWith('.')){
    return false;
  }
  if(containSpaces.test(emailValue)){
    return false;
  }
  return true;
}

// Password validation
// remember, in this case passwordValue = password.value
function checkPassword(passwordValue){
  if(!mustContainLettersAndNumbers.test(passwordValue)){
    return false;
  }
  if(containSpaces.test(passwordValue)){
    return false;
  }
  if (passwordValue === '' || passwordValue === null || passwordValue.length < 7) {
    return false;
  }
  return true;
}

// Confirm password validation
// remember, in this case confirmPasswordValue = confirmPassword.value
function checkConfirmPassword(confirmPasswordValue){
  if (confirmPasswordValue === password.value) {
    return true;
  }
  else {
    return false;
  }
}

// Age validation
// remember, in this case ageValue = age.value
function checkAge(ageValue){
  if (ageValue === '' || ageValue === null || ageValue < 18 || ageValue % 1 != 0) {
    return false;
  }
  if (!numbersOnly.test(ageValue)) {
    return false;
  }
  return true;
}

// Phone validation
// remember, in this case phoneValue = phone.value
function checkPhone(phoneValue){
  if (phoneValue === '' || phoneValue === null || phoneValue.length < 7) {
    return false;
  }
  if (!numbersOnly.test(phoneValue)) {
    return false;
  }
  return true;
}

// Adress validation
// remember, in this case adressValue = adress.value
function checkAdress(adressValue){
  // var spaceBetween = adressValue.indexOf(' ');
  if (adressValue === '' || adressValue === null || adressValue.length < 5 || spaceBetween < 0 || adressValue.startsWith(' ') || adressValue.endsWith(' ')) {
    return false
  }
  if(!mustContainLettersNumbersSpaces.test(adressValue)){
    return false;
  }
  return true
}

// City validation
// remember, in this case cityValue = city.value
function checkCity(cityValue){
  if (cityValue === '' || cityValue === null || cityValue.length < 3 || cityValue.startsWith(' ') || cityValue.endsWith(' ')) {
    return false
  }
  return true
}

// Postal Code validation
// remember, in this case postalCodeValue = postalCode.value
function checkPostalCode(postalCodeValue){
  if (postalCodeValue === '' || postalCodeValue === null || postalCodeValue.length < 3 || postalCodeValue.startsWith(' ') || postalCodeValue.endsWith(' ')) {
    return false
  }
  if(!lettersNumbersSpacesOnly.test(postalCodeValue)){
    return false;
  }
  if(!mustContainNumbers.test(postalCodeValue)){
    return false;
  }
  return true
}

// ID validation
// remember, in this case idValue = id.value
function checkId(idValue){
  if (idValue === '' || idValue === null || idValue.length < 7 || idValue.length > 8) {
    return false
  }
  return true
}



function checkForm(){
    return (checkName() && checkEmail() && checkPassword() && checkAge() && checkPhone() && checkAdress() && checkCity() && checkPostalCode() && checkId())
}

// --------------------------------------------------------------------------------------------------------------------

// WINDOWS ONLOAD (fixes getElement issues with empty inputs) ---------------------------------------------------------


  // INPUTS VARIABLES -------------------------------------------------------------------------------------------------
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
  var form = document.getElementById('button')
  
  // ERROR VARIABLES --------------------------------------------------------------------------------------------------
  var nameError = document.getElementById('nameError')
  var emailError = document.getElementById('emailError')
  var passwordError = document.getElementById('passwordError')
  var confirmPasswordError = document.getElementById('confirmPasswordError')
  var ageError = document.getElementById('ageError')
  var phoneError = document.getElementById('phoneError')
  var adressError = document.getElementById('adressError')
  var cityError = document.getElementById('cityError')
  var postalCodeError = document.getElementById('postalCodeError')
  var idError = document.getElementById('idError')
  //var formError = document.getElementById('formError')
  
  //-------------------------------------------------------------------------------------------------------------------

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
      passwordError.innerText = 'Please type a valid password (must contain at least 8 characters, mixing numbers and letters only)';
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

  // Age validation (blur and focus)
  age.addEventListener('blur', function(){
    if (checkAge(age.value)===false){
      ageError.innerText = 'Please enter a valid age (numbers only), you must be at least 18 years old';
      ageError.style.display='block';
    }
  });
  age.addEventListener('focus', function(){hideError(ageError)})

  // Phone validation (blur and focus)
  phone.addEventListener('blur', function(){
    if (checkPhone(phone.value)===false){
      phoneError.innerText = 'Please enter a valid phone number (numbers only)';
      phoneError.style.display='block';
    }
  });
  phone.addEventListener('focus', function(){hideError(phoneError)})

  // Adress validation (blur and focus)
  adress.addEventListener('blur', function(){
    if (checkAdress(adress.value)===false){
      adressError.innerText = 'Please enter a valid adress (street name and number separated by a space)';
      adressError.style.display='block';
    }
  });
  adress.addEventListener('focus', function(){hideError(adressError)})

  // City validation (blur and focus)
  city.addEventListener('blur', function(){
    if (checkCity(city.value)===false){
      cityError.innerText = 'Please enter a valid city name';
      cityError.style.display='block';
    }
  });
  city.addEventListener('focus', function(){hideError(cityError)})

  // Postal Code validation (blur and focus)
  postalCode.addEventListener('blur', function(){
    if (checkPostalCode(postalCode.value)===false){
      postalCodeError.innerText = 'Please enter a valid Postal Code (numeric or alphanumeric)';
      postalCodeError.style.display='block';
    }
  });
  postalCode.addEventListener('focus', function(){hideError(postalCodeError)})

  // ID validation (blur and focus)
  id.addEventListener('blur', function(){
    if (checkId(id.value)===false){
      idError.innerText = 'Please enter a valid ID number (7 or 8 digits)';
      idError.style.display='block';
    }
  });
  id.addEventListener('focus', function(){hideError(idError)})

  // ------------------------------------------------------------------------------------------------------------------
  // GENERAL VALIDATION (whole form)

  // Form validation (blur and focus)
  form.addEventListener('click', function(e){
    e.preventDefault()
    console.log('hola')
    if (checkForm()){
      alert('passed')
      console.log(name.value)
      console.log(email.value)
      console.log(password.value)
      console.log(confirmPassword.value)
      console.log(age.value)
      console.log(phone.value)
      console.log(adress.value)
      console.log(city.value)
      console.log(id.value)
    }
    else alert ('NOPE')
  });

  
}