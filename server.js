const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let flightPlan = {
    departure: "KJFK",
    arrival: "KLAX",
    waypoints: ["DCT", "JFK", "DCT", "LAX"]
};

// API to get flight plan
app.get("/flight-plan", (req, res) => {
    res.json(flightPlan);
});

// API to update flight plan
app.post("/flight-plan", (req, res) => {
    const { departure, arrival, waypoints } = req.body;
    flightPlan = { departure, arrival, waypoints };
    res.json({ message: "Flight plan updated!", flightPlan });
});

app.listen(3000, () => {
    console.log("FMC Server running on port 3000");
});
