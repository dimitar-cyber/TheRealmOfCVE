import express = require("express");
import {Application, json} from "express";
import {cveRouter} from "./routers/cve.router";
const cors = require("cors");

const app: Application = express();

app.use(json());
app.use(cors())
app.use(cveRouter);

app.listen(8081, () => {
    console.log("Connected to PORT 8081");
});