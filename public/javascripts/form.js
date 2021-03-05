const inputEmail = document.querySelector('form input.email')
const inputPhoneNumber = document.querySelector('form input.phonenumber')
const textarea = document.querySelector('form textarea')
const button = document.querySelector('.formwrap button')
const infoPargf = document.querySelector('form p')

let badEmail = false;
let badMessage = false;

const checkInputs = () => { 
  console.log('click');
  badEmail = false;
  badMessage = false;
  inputEmail.style.borderColor = '#212529';
  textarea.style.borderColor = '#212529';
  infoPargf.innerText = '';
  infoPargf.style.color = 'red';

  if(inputEmail.value.length < 8 || !inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {         
    badEmail = true;  
  }

  if(textarea.value.length < 1) {    
    badMessage = true;
  }
  
  if(badMessage && badEmail) {
    infoPargf.innerText = 'Wpisz poprawny e-mail oraz wiadomość';
  } else if (badEmail) {
    infoPargf.innerText = 'Wpisz poprawny adres e-mail';
  } else if (badMessage) {
    infoPargf.innerText = 'Wiadomość nie może być pusta'
  } else {    
    sendFormData(inputEmail.value, inputPhoneNumber.value, textarea.value);
  }
}

function writeSuccess(data) {
  if(data.send) {   
    infoPargf.innerText = 'Dziękujemy za wiadomość! Wkrótce się skontaktujemy';
    infoPargf.style.color = 'green';
    inputEmail.value = '';
    inputPhoneNumber.value = '';
    textarea.value = '';
  }
}
function sendFormData(email, phoneNumber, message) {
  const data = {
    email: email,
    phoneNumber: phoneNumber,
    message: message
  }

  fetch('/', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)    
  })
  .then(response => response.json())
  .then(data => {    
    writeSuccess(data);
  })
  .catch((error) => console.log('catch', error))
}

button.addEventListener('click', checkInputs);