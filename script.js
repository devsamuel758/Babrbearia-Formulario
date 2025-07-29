const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const phone = document.getElementById("phone");
const location = document.getElementById("location");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

email.addEventListener("blur", checkInputEmail);
username.addEventListener("blur", checkInputUsername);

function checkInputUsername() {
  const usernameValue = username.value;
  if (usernameValue === "") {
    errorInput(username, "Preencha um username!");
  } else {
    removeError(username);
  }
}

function checkInputEmail() {
  const emailValue = email.value;
  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.");
  } else {
    removeError(email);
  }
}

function checkInputPassword() {
  const passwordValue = password.value;
  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    removeError(password);
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
  } else {
    removeError(passwordConfirmation);
  }
}

function checkPhone() {
  const phoneValue = phone.value;
  if (phoneValue === "") {
    errorInput(phone, "O número de telefone é obrigatório.");
  } else {
    removeError(phone);
  }
}

function checkLocation() {
  const locationValue = location.value;
  if (locationValue === "") {
    errorInput(location, "A localização é obrigatória.");
  } else {
    removeError(location);
  }
}

function checkForm() {
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();
  checkPhone();
  checkLocation();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("Cadastrado com sucesso!");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("small");
  textMessage.innerText = message;
  formItem.className = "form-content error";
}

function removeError(input) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("small");
  textMessage.innerText = "";
  formItem.className = "form-content";
}
