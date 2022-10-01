const form = document.getElementById("form__login");
const email = document.getElementById("Email");
const pass = document.getElementById("password");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  //previene los errores
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  // const passwordValue = pass.value.trim();

  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  console.log(regexEmail.test(email.value));

  //email
  if (emailValue === "") {
    warnings (email,`No puede dejar el usuario en blanco.`) ;
  
  } else {
    warnings(email, "No ingreso un email válido.");
     entrar = true;
}
  
//  else if (!regexEmail.test(email.Value)) {
//     warnings(email, "No ingreso un email válido.");

  // if (!regexEmail.test(email.value)) {
  //   warnings += `El email no es valido <br>`;
  //   entrar = true;
  // }

  if (pass.value.length < 7) {
    warnings += `La contraseña no es valida <br>`;
    entrar = true;
  }
}
