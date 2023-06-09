import {Router} from "express";
import {createCve, deleteCve, getCve, getCves, updateCve} from "../controllers/cve.controller";

export const cveRouter = Router();
cveRouter.get("/cve", getCves);
cveRouter.get("/cve/:id", getCve);
cveRouter.post("/cve", createCve);
cveRouter.put("/cve/:id", updateCve);
cveRouter.delete("/cve/:id", deleteCve);