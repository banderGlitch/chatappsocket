const express = require('express');
// import { Server } from "socket.io";
// import { createServer } from "http";
const cors = require('cors')
// import cors from 'cors'
// const main = require('./src/config/database.js')
// import { main } from './src/config/database.js';
// import userRouters from './src/user/users.routes.js';
const app = express();

// const server = createServer(app)
const user_routes = require('./src/user/users.routes');
// export database
require('./src/config/database')
// const io = new Server(server, {
//   cors: {
//     origin: "https://37e7-103-89-61-50.ngrok-free.app ",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });


// io.on("connection", (socket) => {
//     console.log("User Connected!")
//     console.log("Id", socket.id);

//     socket.on('send_message', (data) => {
//       console.log("received_message", data)
//       io.emit("received_message",data)
//     })
// })
// MongoDB Connection we have 


// MiddleWare we have
app.use(cors())
app.use(express.json())
app.use('/api/users', user_routes);

app.get('/', (req, res) => {
  res.send('<h1>Socket.io</h1>');
});


const PORT = 3000

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});