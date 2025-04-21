import express from "express";
import cors from "cors";
import morgan from "morgan";
import axios from "axios";

import apiRoute from "./routes/apiRoute.js";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json())

server.post("/test-api", async (req, res) => {
    const { url, method, jsonInput } = req.body;
    console.log({ url, method, jsonInput });

    switch (method) {
        case "GET":
            if (url) {
                try {
                    const response = await axios.get(url);
                    res.json({
                        status: response.status,
                        headers: response.headers,
                        data: response.data,
                    });
                } catch (error) {
                    res.status(500).json({
                        error: "Failed to fetch data",
                        message: error.message,
                        details: error.response?.data || null,
                    });
                }
            }
            break;
        case "POST":
            if (url) {
                try {
                    const response = await axios.post(url, req.body.jsonInput);
                    res.json({
                        status: response.status,
                        headers: response.headers,
                        data: response.data,
                    });
                } catch (error) {
                    res.status(500).json({
                        error: "Failed to post data",
                        message: error.message,
                        details: error.response?.data || null,
                    });
                }
            }
            break;
        case "DELETE":
            if (url) {
                try {
                    const response = await axios.delete(url); // ID is already in the URL
                    res.json({
                        status: response.status,
                        headers: response.headers,
                        data: response.data,
                    });
                } catch (error) {
                    res.status(500).json({
                        error: "Failed to delete data",
                        message: error.message,
                        details: error.response?.data || null,
                    });
                }
            }
            break;
        // case "PUT":
        //     if (url) {
        //         try {

        //         } catch (error) {

        //         }
        //     }
        //     break;
        // case "PATCH":
        //     if (url) {
        //         try {

        //         } catch (error) {

        //         }
        //     }
        //     break;

        default:
            res.status(400).json({ error: "Unsupported HTTP method" });
            break;
    }

});

server.listen(2000, () => {
    console.log("running");
});