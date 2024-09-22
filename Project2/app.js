const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const htmlPath = path.join(__dirname, "public");

var username;

app.use(express.json());
app.use(express.static(htmlPath));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

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

// get web response
app.get("/", (req, res) => {
    res.set("Content-type", "text/html"); // set content type as html when interpreted instead of text
    res.status(200).send("<h1>Welcome to the server</h1>");
});

app.get("/projects", (req, res) => {
    res.send(projects);
});

app.get("/getProject", (req, res) => {
    // Method with try...catch
    try {
        const keyValue = parseInt(req.query.projectCode);

        let projectFound = false;
        for (var i = 0; i < projects.length; i++) {
            if (keyValue === projects[i].projectCode) {
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

// original:
// app.get("/button", (req, res) => {
//     res.sendFile(path.join(htmlPath, "button.html"));
// });

// app.post("/button", (req, res) => {
//     const userInput = req.body.input;
//     console.log(userInput);
//     res.redirect(`/calculator?input=${encodeURIComponent(userInput)}`); // ejs method; global variable method: https://stackoverflow.com/questions/65165267/express-how-do-i-pass-a-value-from-a-form-and-receive-it-from-another-html-and-a
// });

// dynamic
app.get("/submit", (req, res) => {
    res.render("button", { input: "" });
});

app.post("/send", (req, res) => {
    username = req.body.input;
    if (!username) {
        res.render("button", { input: "No username found" });
    } else {
        res.render("calc", { input: username });
    }
});

app.get("/send", (req, res) => {
    if (!username) {
        res.render("button", { input: "No username found" });
    } else {
        res.render("calc", { input: username });
    }
});

app.get("/table", (req, res) => {
    if (!username) {
        res.render("button", { input: "No username found" });
    } else {
        res.render("table", { input: username });
    }
});

// error handler
app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server successfully ran", PORT);
    } else {
        console.log("Error when starting", error);
    }
});
