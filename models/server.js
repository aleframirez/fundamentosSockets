import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { socketController } from "../sockets/controller.js";


class Servidor {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = createServer(this.app);
    this.io = new Server(this.server); // Socket.io: Servidor de sockets

    this.paths = {};

    // Middlewares
    this.middlewares();

    // Rutas de app
    this.routes();

    // Sockets
    this.sockets();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, routerLogin);
  }

  sockets(){
    this.io.on('connection', socketController)
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto:", this.port);
    });
  }
}

export default Servidor;
