const express = require('express');
const { Server } = require("socket.io");
const { createServer } = require("http");
const cors = require('cors');
const { main } = require('./src/config/database.js');
const userRouters = require('./src/user/users.routes.js');

const app = express();

const server = createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "https://37e7-103-89-61-50.ngrok-free.app",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//     console.log("User Connected!");
//     console.log("Id", socket.id);

//     socket.on('send_message', (data) => {
//       console.log("received_message", data);
//       io.emit("received_message", data);
//     });
// });

// Middleware ====================>
app.use(cors());
app.use(express.json());
// Middleware ====================>



app.use('/api/users', userRouters);
app.get('/', (req, res) => {
  res.send('<h1>Socket.io</h1>');
});


// MongoDB Connection Database !!
main().then(() => console.log("db connected successfully...!!!")).catch(err => console.log(err));

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});

