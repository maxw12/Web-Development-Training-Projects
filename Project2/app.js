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
    // Method without try...catch
    // const keyValue = parseInt(req.query.projectCode);
    // console.log(keyValue);
    // console.log(typeof keyValue);
    // let projectFound = false;
    // for (var i = 0; i < projects.length; i++) {
    //     console.log(projects[i]["projectCode"]);
    //     console.log(i);
    //     if (keyValue === projects[i]["projectCode"]) {
    //         console.log("ran: ", projects[i]["projectCode"]);
    //         res.send(projects[i]);
    //         projectFound = true;
    //         break;
    //     }
    // }
    // if (!projectFound) {
    //     console.log("not ran: ");
    //     res.status(404).send({ error: "project not found" });
    // }

    // Method with try...catch
    try {
        const keyValue = parseInt(req.query.projectCode);

        let projectFound = false;
        for (var i = 0; i < projects.length; i++) {
            if (keyValue === projects[i].projectCode) {
                console.log(projects[i]["projectCode"]);
                console.log("ran: ");
                res.send(projects[i]);
                projectFound = true;
                break;
            }
        }
        if (!projectFound) {
            throw new Error("Project not found for the given project code.");
        }
    } catch (error) {
        console.error("there's an error", error);
        res.status(400).send({ error: error.message });
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
