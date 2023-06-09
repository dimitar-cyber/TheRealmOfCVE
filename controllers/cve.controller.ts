import {Request, Response} from "express";
import {DB} from "../core/DB";
import {CveModel} from "../models/cve.model";

const db = new DB();
const cveModel = new CveModel(db);
const getCves = async (req: Request, res: Response) => {
    const data = await cveModel.getAllCves();
    res.status(200).send(data);
}

const getCve = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await cveModel.getSingleCve(parseInt(id));
    res.status(200).send(data);
}
const createCve = async (req: Request, res: Response) => {
    const data = req.body;
    await cveModel.createCve(data)
    res.status(200).send("Successfully created cve");
}
const updateCve = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cveData = req.body;
    await cveModel.updateCve(parseInt(id), cveData);
    res.status(200).send("Successfully updated cve");
}
const deleteCve = async (req: Request, res: Response) => {
    const { id } = req.params;
    await cveModel.deleteCve(parseInt(id));
    res.status(200).send("Successfully deleted cve");
}

export {
    getCves,
    getCve,
    createCve,
    updateCve,
    deleteCve
}