let today = new Date().toISOString().slice(0, 10);
const block = document.createElement("div");

createNavElements("/submit", "Home");
createNavElements("/send", "Calcuator");
createNavElements("/table", "Table");
const date = document.createElement("p");
const username = document.createElement("p");

if (document.getElementById("navbar").getAttribute("name") === "") {
    username.textContent = "No user signed in";
} else {
    username.textContent = document
        .getElementById("navbar")
        .getAttribute("name");
}
date.textContent = today;
block.append(date);
block.append(username);

// original
// const userInput = getQueryParam("input");
// const input = document.createElement("p");
// input.textContent = userInput;
// block.append(input);

document.getElementsByClassName("navbar")[0].append(block);

function createNavElements(href, text) {
    const tag = document.createElement("a");
    tag.href = href;
    tag.text = text;

    block.append(tag);
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
