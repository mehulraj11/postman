import express from "express"
import { getMethod } from "../controllers/apiController.js"

const apiRoute = express.Router();

apiRoute.get("/", getMethod)

export default apiRoute