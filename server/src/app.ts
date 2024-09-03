import express, { Application, Request, Response } from "express";
import { BodyParser } from "body-parser";

import { corsHeaders } from "./middlewares/cors.middleware";
import { productsRouter } from "./routes/products.router";
import { authRouter } from "./routes/auth.router";
import { authMiddleware } from "./middlewares/auth.middleware";
import { userRouter } from "./routes/user.router";
import path from "path";

const app:Application=express();


//Sutvarkomi duomenys jei buvo siusta forma
app.use(express.urlencoded({ extended: false }));

//Sutvarkomi duomenys jei buvo atsiustas JSON failas
app.use(express.json());

//Į visus response header'ius įkeliame CORS nurodymus
app.use(corsHeaders);



app.use("/img", express.static( path.join("./img") ));





app.use('/products', productsRouter);
app.use('/auth', authRouter);
app.use("/users", userRouter);


export {app};