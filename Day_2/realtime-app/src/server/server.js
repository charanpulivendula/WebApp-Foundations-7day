const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("New client connected");
  
  let interval;

  socket.on("startStreaming", () => {
    if (!interval) {
      interval = setInterval(() => {
        const speed = Math.floor(Math.random() * 120);
        const brake = Math.random() < 0.5;

        socket.emit("carData", { speed, brake });
      }, 100);
    }
  });

  socket.on("stopStreaming", () => {
    clearInterval(interval);
    interval = null;
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
