const form = document.getElementById("form__login");
const email = document.getElementById("Email");
const pass = document.getElementById("password");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  //previene los errores
  e.preventDefault();

  // const data = {
  //   email: email.value,
  //   pass: pass.value,
  // };

  // console.log(data);

  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   console.log(regexEmail.test(email.value));
  if (!regexEmail.test(email.value.trim())) {
    warnings += `El email no es valido <br>`;
    entrar = true;
  }

  if (pass.value.length < 7) {
    warnings += `La contraseña no es valida <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } 

});


// const form = document.querySelectorAll("input");

// form.forEach((input) => {
//   form.addEventListener("blur", (input) => {
//     form(input.target);
//   });
// });