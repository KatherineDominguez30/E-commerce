import { clienteServices } from "../servidor/servidor-cliente.js";

//aqui interactuaremos con js y el html
const crearNuevaLinea = (email, password, id) => {
  const linea = document.createElement("tr");
  const contenido = `  
           <td class="td" data-td> ${email}</td>
           <td>${password}</td>
           <td>
             <ul class="table__button-control">
               <li>
                 <a
                   href="./editar_cliente.html?id=${id}"
                   class="simple-button simple-button--edit"> Editar</a>
               </li>
               <li>
                 <button
                   class="simple-button simple-button--delete"
                   type="button" id="${id}"
                 >
                   eliminar
                 </button>
               </li>
             </ul>
           </td>
         `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clienteServices
      .eliminarCliente(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((error) => alert("Ocurrio un error"));
  });
  return linea;
};

//donde se va a incluir la informacion
const table = document.querySelector("[data-table]");

//mostramos la informacion en la tabla de clientes
clienteServices
  .listaClientes()
  .then((data) => {
    data.forEach(({email, password, id }) => {
      const nuevaLinea = crearNuevaLinea(
        email,
        password,
        id
      );
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error"));
