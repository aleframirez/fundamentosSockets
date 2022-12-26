import Servidor from "./models/server.js";
import * as dotenv from "dotenv";
dotenv.config();

const server = new Servidor();

server.listen();
