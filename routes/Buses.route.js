import { Router } from "express";
import { getRoutes } from "../utils/busRoutes.js";
const router = Router(); // Router

router.get("/", (req, res) => {
    res.status(200).send("Welcome to the Buses API!");
});

router.get("/routes", (req,res) => {
    const routes = getRoutes();
    res.status(200).json({routes});
})

export default function getRoute(){
    return router;
}