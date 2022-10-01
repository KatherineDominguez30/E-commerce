//crearemos un fech API, es simplemente una funcion para llamar al servidor(backend), donde este recibira la respuesta y depues la transforma en un json
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

//crearemos el cliente
const crearCliente = (email, password) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      id: uuid.v4(),
    }),
  });
};

//eliminar cliente
const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

//detalle Cliente
const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

//actualizar cliente
const actualizarCliente = (email, password, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password}),
  })
    .then((respuesta) => respuesta)
    .catch((error) => alert(error));
};

export const clienteServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
