// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
import userRoutes from "./routes/users.js";
app.use("/api/users", userRoutes);

// Servir archivos estáticos (tu dashboard)
app.use(express.static("./"));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
