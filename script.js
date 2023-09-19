let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validatePhone() {
  var phone = document.getElementById("phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone number should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits are allowed";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "email is not a valid";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validatemsg() {
  var msg = document.getElementById("msg").value;
  var required = 30;
  var left = required - msg.length;
  if (left > 0) {
    msgError.innerHTML = left + "more characters required";
    return false;
  }
  msgError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail()) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix error before submiting.";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
