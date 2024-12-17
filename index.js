// Imports
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { createServer } from "node:http";
import busesRouter from "./routes/Buses.route.js";

config();

const app = express();
const server = createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", busesRouter()); // Ensure this handles your bus routes properly

// Uncomment for WebSocket functionality if needed in the future
/*
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log(`A user connected: ${socket.id}`);

    // Start tracking the location:
    socket.on("update-location", (data) => {
        const { latitude, longitude } = data;
        console.log(latitude, longitude);
    });

    socket.on("disconnect", () => {
        console.log(`${socket.id} left`);
    });
});
*/

// Server listening
server.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on port ${process.env.PORT || 3000}.`)
);
