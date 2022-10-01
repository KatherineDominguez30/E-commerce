import { clienteServices } from "../servidor/servidor-cliente.js"

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;
  clienteServices
    .crearCliente(email, password)
    .then(() => {
      window.location.href = "/html/registro_completado.html";
    })
    .catch((err) => console.log(err));
});
