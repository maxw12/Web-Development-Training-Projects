let today = new Date().toISOString().slice(0, 10);
const block = document.createElement("div");
createNavElements("button.html", "Home");
createNavElements("calc.html", "Calcuator");
createNavElements("table.html", "table");
block.append((document.createElement("p").text = today));
document.getElementsByClassName("navbar")[0].append(block);

function createNavElements(href, text) {
    const tag = document.createElement("a");
    tag.href = href;
    tag.text = text;

    block.append(tag);
}
