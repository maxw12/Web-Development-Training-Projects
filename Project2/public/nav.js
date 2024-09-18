let today = new Date().toISOString().slice(0, 10);
const block = document.createElement("div");
// const info = document.createElement("div");

createNavElements("/button", "Home");
createNavElements("/calculator", "Calcuator");
createNavElements("table.html", "table");
const date = document.createElement("p");
date.textContent = today;
block.append(date);

const userInput = getQueryParam("input");
const input = document.createElement("p");
input.textContent = userInput;
block.append(input);

// document.getElementsByClassName("info").append(info);
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
