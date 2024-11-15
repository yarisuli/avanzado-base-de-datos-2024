import express from "express";
import PlatosRouter from "./routes/platos.router.js";
import AuthRouter from "./routes/auth.router.js";
import PedidosRouter from "./routes/pedidos.router.js";
import cors from "cors";
import {sequelize} from "./db.js";
import "./models/relaciones.js"; 
import "dotenv/config";

try {
    await sequelize.sync({alter: true}); 
    console.log("Se sincronizo bien"); 
} catch (error) {
    console.error("error al sincronizar!"); 
}

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => res.send("BurgerTIC API is running..."));

app.use("/platos", PlatosRouter);
app.use("/auth", AuthRouter);
app.use("/pedidos", PedidosRouter);

app.listen(process.env.PORT || 9000, () =>
    console.log(`Server is running on port ${process.env.PORT || 9000}`)
);
