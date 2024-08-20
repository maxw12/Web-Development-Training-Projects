const inputValue = document.getElementById("user-input")

const number = document.querySelectorAll(".number").forEach(function (item){ // for each item in the query selector
    item.addEventListener("click", function (e){ 
        if (inputValue.innerText==="0" || inputValue.innerText==="."){ //inputValue.innerText==="NaN" ||
            inputValue.innerText = "" // if inner text of component is not a number, it will return nothing
        }
        inputValue.innerText += e.target.innerHTML
    })
})

const operation = document.querySelectorAll(".operation").forEach(function (item){
    item.addEventListener("click", function (e){
        // console.log(e.target.innerHTML) // target refers to the element that is clicked
        let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length-1)
        if (!isNaN(lastValue) && e.target.innerHTML === "=") { // if the last value is a number and equal is pressed
            inputValue.innerText = eval(inputValue.innerText); 
        } else {
            if (!isNaN(lastValue)){ // if the last value is a number, do this
                inputValue.innerText += e.target.innerHTML 
            }
        }
    })
})
