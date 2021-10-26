// Auto writing name --------------------------------------------------------------------------------------------------
var getName = function(){
  var userName = document.getElementById('name').value;
  document.getElementById('userName').innerHTML=userName;
}

// OnKey for the name input (only allows you to enter letters and spaces at the name input) ---------------------------
function validateKeyName(e){
  return lettersAndSpaceOnly.test(e.key)
}

// RegExp  ------------------------------------------------------------------------------------------------------------
var lettersAndSpaceOnly = /^[ña-zÑA-Z\s]+$/;
var numbersOnly = /^[0-9]+$/;
var lettersNumbersSpacesOnly = /^[ña-zÑA-Z\s0-9]+$/;
var lettersNumbersOnly = /^[A-Za-z0-9]+$/;
var mustContainNumbers = /^(?=.*[0-9])/;
var mustContainLettersAndNumbers = /^(?=.*[0-9])(?=.*[a-zA-Z])/;
var mustContainLettersNumbersSpaces = /^(?=.*[0-9])(?=.*[a-zA-Z\s])/;
var containSpaces = /\s/;

// Hide error messages (this makes the error messages to be non-displayed as default) ---------------------------------
function hideError(errorMessage){
  errorMessage.innerHTML=''
  errorMessage.style.display='none';
}

// --------------------------------------------------------------------------------------------------------------------
// Local validating functions declared --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

// Name validation
function checkName(nameValue){
  var spaceBetween = nameValue.indexOf(' ');
  return(
    nameValue !=='' &&
    nameValue.length > 6 &&
    (!nameValue.startsWith(' ')) &&
    (!nameValue.endsWith(' ')) &&
    spaceBetween > 0
  );
}

// Email validation
function checkEmail(emailValue){
  return(
    emailValue !== '' &&
    (!emailValue.endsWith('.')) &&
    (!emailValue.startsWith('.')) &&
    (!containSpaces.test(emailValue))
  );
}

// Password validation
function checkPassword(passwordValue){
  return(
    passwordValue !== '' &&
    passwordValue.length > 7 &&
    mustContainLettersAndNumbers.test(passwordValue) &&
    (!containSpaces.test(passwordValue))
  );
}

// Confirm password validation
function checkConfirmPassword(confirmPasswordValue){
  return(
    confirmPasswordValue === password.value
  );
}

// Age validation
function checkAge(ageValue){
  return(
    ageValue !== '' &&
    ageValue >= 18 &&
    ageValue % 1 === 0 &&
    numbersOnly.test(ageValue)
  )
}

// Phone validation
function checkPhone(phoneValue){
  return(
    phoneValue !== '' &&
    phoneValue.length >= 7 &&
    numbersOnly.test(phoneValue)
  );
}

// Adress validation
function checkAdress(adressValue){
  var spaceBetween = adressValue.indexOf(' ');
  return(
    adressValue !== '' &&
    adressValue.length >= 5 &&
    (!adressValue.startsWith(' ')) &&
    (!adressValue.endsWith(' ')) &&
    spaceBetween > 0 &&
    lettersNumbersSpacesOnly.test(adressValue)
  );
}

// City validation
function checkCity(cityValue){
  return(
    cityValue !== '' &&
    cityValue.length >= 3 &&
    (!cityValue.startsWith(' ')) &&
    (!cityValue.endsWith(' ')) &&
    lettersAndSpaceOnly.test(cityValue)
  );
}

// Postal Code validation
function checkPostalCode(postalCodeValue){
  return(
    postalCodeValue !== '' &&
    postalCodeValue.length >= 3 &&
    (!postalCodeValue.startsWith(' ')) &&
    (!postalCodeValue.endsWith(' ')) &&
    lettersNumbersSpacesOnly.test(postalCodeValue) &&
    mustContainNumbers.test(postalCodeValue)
  );
}

// ID validation
function checkId(idValue){
  return(
    idValue !== '' &&
    idValue.length >= 7 &&
    idValue.length <= 8
  );
}

// --------------------------------------------------------------------------------------------------------------------
// WINDOWS ONLOAD (fixes getElement issues with empty inputs) ---------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

window.onload=function(){
  
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
  var form = document.getElementById('form')

  // INPUT LIST -------------------------------------------------------------------------------------------------------
  var inputList = [
    name,
    email,
    password,
    confirmPassword,
    age,
    phone,
    adress,
    city,
    postalCode,
    id,
  ]

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
  
  //-------------------------------------------------------------------------------------------------------------------
  // VALIDATING FUNCTIONS ---------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------

  // Name validation (blur and focus) ---------------------------------------------------------------------------------
  name.addEventListener('blur', function(){
    if (checkName(name.value)===false) {
      nameError.innerText = 'Please type full name (first and last name separated by a space and at least 6 letters long)';
      nameError.style.display='block';
    }
  })
  name.addEventListener('focus', function(){hideError(nameError);
  })

  // Email validation (blur and focus) --------------------------------------------------------------------------------
  email.addEventListener('blur', function(){
    if (checkEmail(email.value)===false){
      emailError.innerText = 'Please type a valid email';
      emailError.style.display='block';
    }
  })
  email.addEventListener('focus', function(){hideError(emailError);
  })
  
  // Password validation (blur and focus) -----------------------------------------------------------------------------
  password.addEventListener('blur', function(){
    if (checkPassword(password.value)===false){
      passwordError.innerText = 'Please type a valid password (must contain at least 8 characters, mixing numbers and letters only)';
      passwordError.style.display='block';
    }
  });
  password.addEventListener('focus', function(){hideError(passwordError);
  })

  // Confirm password validation (blur and focus) ---------------------------------------------------------------------
  confirmPassword.addEventListener('blur', function(){
    if (checkConfirmPassword(confirmPassword.value)===false){
      confirmPasswordError.innerText = 'Passwords are not the same';
      confirmPasswordError.style.display='block';
    }
  });
  confirmPassword.addEventListener('focus', function(){hideError(confirmPasswordError)})

  // Age validation (blur and focus) ----------------------------------------------------------------------------------
  age.addEventListener('blur', function(){
    if (checkAge(age.value)===false){
      ageError.innerText = 'Please enter a valid age (numbers only), you must be at least 18 years old';
      ageError.style.display='block';
    }
  });
  age.addEventListener('focus', function(){hideError(ageError)})

  // Phone validation (blur and focus) --------------------------------------------------------------------------------
  phone.addEventListener('blur', function(){
    if (checkPhone(phone.value)===false){
      phoneError.innerText = 'Please enter a valid phone number (numbers only)';
      phoneError.style.display='block';
    }
  });
  phone.addEventListener('focus', function(){hideError(phoneError)})

  // Adress validation (blur and focus) -------------------------------------------------------------------------------
  adress.addEventListener('blur', function(){
    if (checkAdress(adress.value)===false){
      adressError.innerText = 'Please enter a valid adress (street name and number separated by a space)';
      adressError.style.display='block';
    }
  });
  adress.addEventListener('focus', function(){hideError(adressError)})

  // City validation (blur and focus) ---------------------------------------------------------------------------------
  city.addEventListener('blur', function(){
    if (checkCity(city.value)===false){
      cityError.innerText = 'Please enter a valid city name';
      cityError.style.display='block';
    }
  });
  city.addEventListener('focus', function(){hideError(cityError)})

  // Postal Code validation (blur and focus) --------------------------------------------------------------------------
  postalCode.addEventListener('blur', function(){
    if (checkPostalCode(postalCode.value)===false){
      postalCodeError.innerText = 'Please enter a valid Postal Code (numeric or alphanumeric)';
      postalCodeError.style.display='block';
    }
  });
  postalCode.addEventListener('focus', function(){hideError(postalCodeError)})

  // ID validation (blur and focus) -----------------------------------------------------------------------------------
  id.addEventListener('blur', function(){
    if (checkId(id.value)===false){
      idError.innerText = 'Please enter a valid ID number (7 or 8 digits)';
      idError.style.display='block';
    }
  });
  id.addEventListener('focus', function(){hideError(idError)})

  // ------------------------------------------------------------------------------------------------------------------
  // GENERAL VALIDATION (whole form) ----------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------

  // Form validation --------------------------------------------------------------------------------------------------
  form.addEventListener('submit', function(e){
    e.preventDefault()

    // Here it creates an array of messages that are pushed whenever an error with the imputs is verified. ------------
    // The errors shown before at the VALIDATING FUNCTIONS part, are displayed on the next element sibling (because of 
    // how the code is structured, the <p> elements on the HTML file that correspond to the error messages and are ----
    // right next to the imput elements) ------------------------------------------------------------------------------

    var messages = []
    e.target.name.nextElementSibling.textContent ? messages.push(e.target.name.nextElementSibling.textContent) : null
    e.target.email.nextElementSibling.textContent ? messages.push(e.target.email.nextElementSibling.textContent) : null
    e.target.password.nextElementSibling.textContent ? messages.push(e.target.password.nextElementSibling.textContent) : null
    e.target.confirmPassword.nextElementSibling.textContent ? messages.push(e.target.confirmPassword.nextElementSibling.textContent) : null
    e.target.age.nextElementSibling.textContent ? messages.push(e.target.age.nextElementSibling.textContent) : null
    e.target.phone.nextElementSibling.textContent ? messages.push(e.target.phone.nextElementSibling.textContent) : null
    e.target.adress.nextElementSibling.textContent ? messages.push(e.target.adress.nextElementSibling.textContent) : null
    e.target.city.nextElementSibling.textContent ? messages.push(e.target.city.nextElementSibling.textContent) : null
    e.target.postalCode.nextElementSibling.textContent ? messages.push(e.target.postalCode.nextElementSibling.textContent) : null
    e.target.id.nextElementSibling.textContent ? messages.push(e.target.id.nextElementSibling.textContent) : null

    // If no errors are detected on any input at the VALIDATING FUNCTIONS part, then the form will be validated -------
    // entirely, showing de successful validation modal and fetching the data -----------------------------------------

    if ((checkName(name.value)===true)&&
    (checkEmail(email.value)===true)&&
    (checkPassword(password.value)===true)&&
    (checkConfirmPassword(confirmPassword.value)===true)&&
    (checkAge(age.value)===true)&&
    (checkPhone(phone.value)===true)&&
    (checkAdress(adress.value)===true)&&
    (checkCity(city.value)===true)&&
    (checkPostalCode(postalCode.value)===true)&&
    (checkId(id.value)===true))
    { 
      // For the fetching part, the following "for" creates a string with all the data that will be given to the server
      // It starts with the "?", followed by the info string, wich is build upon the serverParameters and url variables
      // '=' and '&' strings, and replacing the spaces inside the inputs with a '%20'. --------------------------------

      for (var i = 0; i < inputList.length; i++) {
        serverParameters += inputList[i].id + '=' + inputList[i].value + '&';
      }
      var fullServerParameters = serverParameters.replace(/\s/g, '%20');
      var fullUrl = url + fullServerParameters;
      console.log(fullUrl)
      fetch(fullUrl)
      .then(function(fullUrl) {
        return fullUrl.json();
      })
      .then(function(data) {
        modalSuccess(data)
        serverParameters = '?'
        console.log('data',data)
      })
      .catch(function(err) {
        modalErrorServer(err)
        serverParameters = '?'
      })
    }
    else {
      if(messages.length > 0){
        modalErrorLocal(messages);
      }
      else{
        modalErrorBlank();
      }
    }
  });

  // ------------------------------------------------------------------------------------------------------------------
  // SERVER -----------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------

  // Variables for server com -----------------------------------------------------------------------------------------
  var url = 'https://curso-dev-2021.herokuapp.com/newsletter';
  var serverParameters = '?';

  // ------------------------------------------------------------------------------------------------------------------
  // MODAL(S) ---------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------

  // Get the modal element
  var modal = document.getElementById('simpleModal');
  // Get both close buttons
  var closeBtn = document.getElementsByClassName('closeBtn')[0];
  var okCloseBtn = document.getElementsByClassName('okCloseBtn')[0];
  // Modal title
  var modalTitle = document.getElementById('modal-title');
  // Modal body
  var modalBody = document.getElementsByClassName('modal-body')[0];
  // Modal list
  var modalList = document.getElementById('modal-list')

  // Close click listener
  closeBtn.addEventListener('click', closeModal);
  okCloseBtn.addEventListener('click', closeModal);
  // Close window listener
  window.addEventListener('click', outsideClick)

  // Modal Success Display --------------------------------------------------------------------------------------------
  function modalSuccess(data){
    modalList.innerHTML = '';
    modal.style.display = 'block';
    modalTitle.innerHTML = 'Validation Successful!';
    for (var property in data){
      if(property != 'password' && property != 'confirmPassword'){
        modalList.innerHTML += `<li id='modal-success'>${data[property]}</li>`
      }
    }
    // LocalStorage
    // (only if everything is ok, it'll be storaged)
    for (var property in data) {
      localStorage.setItem(property, data[property])
    }
  }

  // Modal Error Display (Server) -------------------------------------------------------------------------------------
  function modalErrorServer(err){
    modalList.innerHTML = '';
    modal.style.display = 'block';
    modalTitle.innerHTML = 'Server error!';
    for (var property in err){
      modalList.innerHTML += `<li>${err[property]}</li>`
    }
  }

  // Modal Local Error Validation Display -----------------------------------------------------------------------------
  // (with local I mean that these errors prevent the info to be fetched, first you have to correct them)
  function modalErrorLocal(locError){
    modalList.innerHTML = '';
    modal.style.display = 'block';
    modalTitle.innerHTML = 'Please correct the following mistakes:';
    for (let i = 0; i < locError.length; i++) {
      modalList.innerHTML += `<li id='modal-error'>${locError[i]}</li>`;
    }
  }

  // Modal Blank Error Display ----------------------------------------------------------------------------------------
  function modalErrorBlank(blankError){
    modalList.innerHTML = '';
    modal.style.display = 'block';
    modalTitle.innerHTML = 'Please, you must complete the fields!';
  }

  // Function to close modal by button --------------------------------------------------------------------------------
  function closeModal(){
    modal.style.display = 'none';
    modalBody.innerHTML = '';
  }
  
  // Function to close modal by clicking outside ----------------------------------------------------------------------
  function outsideClick(e){
    if(e.target === modal){
      modal.style.display = 'none';
    }
  }

  // ------------------------------------------------------------------------------------------------------------------
  // LOCAL STORAGE AND AUTO FILLING -----------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------

  // Local Storage Check 
  for (var i = 0; i < inputList.length; i++) {
    if(localStorage.getItem(inputList[i].id) !== null) {
      // Input Filling
      inputList[i].value = localStorage.getItem(inputList[i].id);
    }
  }
}