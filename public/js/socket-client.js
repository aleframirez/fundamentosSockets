// Referencias de HTML
const lvlOnline = document.querySelector("#lvlOnline");
const lvlOffline = document.querySelector("#lvlOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();
// console.log('Bueeeenas');

// El on es para que quede escuchando a algun evento.
socket.on("connect", () => {
//   console.log("conectado");

  lvlOnline.style.display = "none";
  lvlOffline.style.display = "";
});

socket.on("disconnect", () => {
//   console.log("desconectado del servidor");

  lvlOffline.style.display = "none";
  lvlOnline.style.display = "";
});

socket.on('enviar-mensaje', ( payload ) => {
   console.log( payload )
})

btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;
  /* Usualmente no se manda solo un mensaje sino que se 
  envia un objeto con todos los datos del mensaje, del 
  usuario y el momento en cual fue enviado. */
  const payload = {
    mensaje,
    id: 'id del usuario',
    fecha: new Date().getTime()
  };

  // emit sirve para emitir un evento
  socket.emit("enviar-mensaje", payload, ( id ) => {
   console.log('Desde el server', id);
  });
});
