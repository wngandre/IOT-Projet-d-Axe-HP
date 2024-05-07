import express from "express";

const router = express.Router();

let lastHouseVisited = "Gryffindor";

router.get("/", (req, res) => {
    res.json({ message: lastHouseVisited });
});

router.post("/maisons", (req, res) => {
    console.log(req.body);
    lastHouseVisited = req.body.house;
    res.json({ message: lastHouseVisited });
});

router.get("/maisons", (req, res) => {
    res.json({ house: lastHouseVisited });
});

export default router;