import express from "express";
import { getResult } from "../controllers/luckycolor.controller.js";

export const luckycolorRouter = express.Router();

luckycolorRouter.get("/", (req, res) => getResult(req, res));