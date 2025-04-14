import express from "express";
import cors from "cors";
import morgan from "morgan";
import axios from "axios";

import apiRoute from "./routes/apiRoute.js";

const server = express();

server.use(cors());
server.use(morgan("combined"));
server.use(express.json())

server.post("/test-api", async (req, res) => {
    const { url, method } = req.body;

    if (!url && method.toUpperCase() !== "GET") {
        return res.status(400).json({ error: "Only GET method is supported for now." });
    }

    try {
        const response = await axios.get(url);

        const value = res.json({
            status: response.status,
            headers: response.headers,
            data: response.data,
        });
        console.log(value);

    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch data",
            message: error.message,
            details: error.response?.data || null,
        });
    }
});

server.listen(2000, () => {
    console.log("running");
});
