const input = document.getElementById("user-input");

document.querySelectorAll(".number").forEach((item) => {
    item.addEventListener("click", (e) => {
        if (input.innerText === "0" || input.innerText === ".") {
            input.innerText = "";
        }

        if (input.innerText.includes(".") && e.target.innerHTML === ".") {
            input = input;
        }
        input.innerText += e.target.innerText;
    });
});

document.querySelectorAll(".operation").forEach((item) => {
    item.addEventListener("click", (e) => {
        let lastValue = input.innerText.substring(
            input.innerText.length - 1,
            input.innerText.length
        );
        if (!isNaN(lastValue) && e.target.innerText === "=") {
            input.innerText = eval(input.innerText);
        } else if (e.target.innerHTML === "C") {
            input.innerText = "0";
        } else if (isNaN(lastValue)) {
            input = input;
        } else {
            input.innerText += e.target.innerHTML;
        }
    });
});
