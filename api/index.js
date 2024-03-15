import express from 'express';
import { Server } from "socket.io";
import { createServer } from "http";
import cors from 'cors'

const app = express();

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "https://37e7-103-89-61-50.ngrok-free.app ",
    methods: ["GET", "POST"],
    credentials: true,
  },
});


io.on("connection", (socket) => {
    console.log("User Connected!")
    console.log("Id", socket.id);

    socket.on('send_message', (data) => {
      console.log("received_message", data)
      io.emit("received_message",data)
    })
})



// MiddleWare we have
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Socket.io</h1>');
});

const PORT = 3000

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});