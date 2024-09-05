const express = require("express");
const app = express();
const PORT = 3000;

// get web response
app.get("/", (req, res) => {
    res.set("Content-type", "text/html"); // set content type as html when interpreted instead of text
    res.status(200).send("<h1>Welcome to the server</h1>");
});

const projects = [
    {
        projectCode: 1234,
        title: "Cabaletta",
        projectManager: "Max",
    },
    {
        projectCode: 2234,
        title: "Ceramex",
        projectManager: "Maximus",
    },
    {
        projectCode: 3234,
        title: "OCR",
        projectManager: "Maxwanonly",
    },
];
app.get("/projects", (req, res) => {
    res.send(projects);
});

app.get("/getProject", (req, res) => {
    const keyValue = req.query.key;
    for (var i = 0; i < projects.length; i++) {
        if (keyValue === i[key]) {
            res.send(projects[i]);
        } else {
            res.status(404).send({ error: "key not found" });
        }
    }
});

// post request
app.use(express.json()); // Middleware to handle json data
app.post("/", (req, res) => {
    const { name } = req.body;
    res.send(`Welcome ${name}`);
});

// error handler
app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server successfully ran", PORT);
    } else {
        console.log("Error when starting", error);
    }
});
