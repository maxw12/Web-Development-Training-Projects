const input = document.getElementById("user-input");

// Create a class to take in tag inputs
// class getTag {
//     constructor(tag) {
//         this.tag = document.getElementById(tag);
//     }

//     get value() {
//         return this.getValue();
//     }

//     set setvalue(s) {
//         return (this.tag.innerText = s);
//     }

//     getValue() {
//         return this.tag.innerText;
//     }
// }
// const display = new getTag("user-input");
// console.log(display.value);

// document.querySelectorAll(".number").forEach((item) => {
//     item.addEventListener("click", (e) => {
//         if (display.value === "0" || display.value === ".") {
//             console.log("it is 0...");
//             display.setvalue = "";
//         }

//         if (display.value.includes(".") && e.target.innerHTML === ".") {
//             display.setvalue = display.value;
//         }
//         display.setvalue = display.value + e.target.innerText;
//         console.log(display.value);
//         console.log(typeof display.value);
//         console.log(e.target.innerText);
//         console.log("I was run");
//     });
// });

// document.querySelectorAll(".operation").forEach((item) => {
//     item.addEventListener("click", (e) => {
//         let lastValue = display.value.substring(
//             display.value.length - 1,
//             display.value.length
//         );
//         if (!isNaN(lastValue) && e.target.innerText === "=") {
//             display.setvalue = eval(display.value);
//         } else if (e.target.innerHTML === "C") {
//             display.setvalue = "0";
//         } else if (isNaN(lastValue)) {
//             display.setvalue = display.value;
//         } else {
//             display.setvalue = display.value + e.target.innerHTML;
//         }
//     });
// });

document.querySelectorAll(".number").forEach((item) => {
    item.addEventListener("click", (e) => {
        if (input.innerText === "0" || input.innerText === ".") {
            console.log("this is 0 as well...");
            input.innerText = "";
        }

        if (input.innerText.includes(".") && e.target.innerHTML === ".") {
            input = input;
        }
        input.innerText += e.target.innerText;
        console.log(typeof input.innerText);
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

let params = new URL(document.location.toString()).searchParams;
let name = params.get("input");
let display = document.getElementById("display");
display.innerHTML = name;
console.log(name);
