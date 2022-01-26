$(document).ready(function () {
  var usernameField = $("#username");
  var messageField = $("message");

  $("#submitBtn").on("click", function (e) {
    e.preventDefault()
    size = checkInputs();
    console.log(size);
    if (size === 0) {
      document.getElementById("form").submit();
    }
  });
  });


function checkInputs() {

  const usernameValue = username.value.trim();
  const messageValue = message.value.trim();

  
  var c = 0;
  
  if (usernameValue === '') {
  setErrorFor(username, 'Numele de utilizator nu este completat!');
  var c = 1;
  }
  
  else {
  setSuccesFor (username);
  }

    
    var textLength = messageValue.length;

    if (messageValue === '') {
      setErrorFor(message, 'Introduceti campul!');
      var c = 1;
      } else if (textLength<=30) {
        setErrorFor(message, 'Completati campul cu minim 30 caractere!');
        var c = 1;
      }
      
      else {
      setSuccesFor (message);
      }

    return c;
  }


function setErrorFor (input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error';
}

function setSuccesFor (input, message) {

  const formControl = input.parentElement;

  formControl.className = 'form-control succes';

}
