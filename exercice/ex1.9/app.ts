import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import filmRouter from "./routes/films";
import DactiloRouter from "./routes/dactilographie";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((_req, _res, next) => {
    console.log(_req.method + " counter : " + _req.method.length);
    /*if (_req.url === "http://localhost:3000/pizzas" && _req.method === "GET") 
        console.log(_req.method + " counter : " + _req.method.length);*/
    next();
});


app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/films", filmRouter);
app.use("/dactilographie", DactiloRouter);

app.get("/pizzas", (_req, _res, next) => {
        console.log(_req.method + " / " + _req.method.length);
    next();
});

export default app;
