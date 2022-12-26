

export const socketController = (socket) => {
   console.log('Cliente conectado', socket.id)
   socket.on('disconnect', () => {
     console.log('Cliente desconectado', socket.id);
   });

   // El socket.on queda escuchando cuando el CLIENTE emite al mensaje.
   socket.on('enviar-mensaje', ( payload, callback) => {
     /* El socket.broadcast.emit es para cuando el SERVIDOR lo 
     envia al mensaje. Este envia un mensaje a todos los 
     clientes conectados */
     socket.broadcast.emit('enviar-mensaje', payload)

     // Tambien se puede usar un callback para que solo el cliente que envia vea la info.
     const id = 123456;
     callback( id );

   })

 }