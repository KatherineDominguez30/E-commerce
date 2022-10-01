import { clienteServices } from "../servidor/servidor-cliente.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id == null) {
    window.location.href = "/html/error.html";
  }

  const email = document.querySelector("[data-email]");
  const password = document.querySelector("[data-password]");

  try {
    const perfil = await clienteServices.detalleCliente(id);
    if (perfil) {
      email.value = perfil.email;
      password.value = perfil.password;
    } else {
      throw new Error();
    }
  } catch (error) {
    window.location.href = "/html/error.html";
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;

  clienteServices
    .actualizarCliente(email, password, id)
    .then(() => {
      window.location.href = "/html/edicion_concluida.html";
    });
});

