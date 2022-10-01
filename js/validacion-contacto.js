const formu = document.getElementById("form_contacto");

formu.addEventListener("submit", (e) => { 

  //previene los errores
  e.preventDefault();
   let warnings = "";
  let entrar = false;
  
  //objeto json
  const data = {
    nombre: document.getElementById("formcontato__name").value,
    mensaje: document.getElementById("mensagem").value,
    parrafo: document.getElementById("warnings").value,
  };

  console.log(data);

  if (data.nombre.length > 40) {
     warnings += `El nombre debe tener máximo 40 caracteres <br>`;
     entrar =true
  }

    if (data.mensaje.length > 120) {
      warnings += `El campo de mensaje debe tener máximo 120 caracteres <br>`;
      entrar = true;
    }

  if (entrar) {
    parrafo.innerHTML = warnings
    alert(warnings);
  }

})
