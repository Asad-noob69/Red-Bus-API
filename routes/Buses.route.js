import { Router } from "express";
import { getRoutes } from "../utils/busRoutes.js";
const router = Router(); // Router

// Welcome Message
router.get("/", (req, res) => {
    res.status(200).send("Welcome to the Red Bus API!");
});

// Get All Routes
router.get("/routes", (req, res) => {
    const routes = getRoutes();
    res.status(200).json({ routes });
});

// Get Single Route by ID
router.get("/routes/:id", (req, res) => {
    const routes = getRoutes(); // Assuming getRoutes() returns an array of route objects
    const { id } = req.params; // Extract 'id' from URL parameters
    const route = routes.find((r) => r.id === parseInt(id)); // Find route by ID (convert id to number)
    
    if (route) {
        res.status(200).json({ route });
    } else {
        res.status(404).json({ message: "Route not found" });
    }
});

export default function getRoute() {
    return router;
}
