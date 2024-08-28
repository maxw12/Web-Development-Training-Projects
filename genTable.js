function createTable() {
    // document.querySelector(".generate").addEventListener("click", (e) => {
    var rowNum = document.getElementById("row").value;
    var colNum = document.getElementById("column").value;

    var dynamicTable = document.getElementById("dynamicTable");
    dynamicTable.border = 1;
    dynamicTable.innerHTML = "";

    var tableBody = document.createElement("tbody");

    for (var row = 0; row < rowNum; row++) {
        var tr = document.createElement("tr");
        tableBody.appendChild(tr);

        for (var col = 0; col < colNum; col++) {
            // var td = document.createElement("td");
            var button = document.createElement("button");
            button.textContent = `${row + 1} - ${col + 1}`;
            button.onclick = function () {
                alert("you clicked " + this.textContent);
            };
            tr.appendChild(button);
        }
    }
    dynamicTable.appendChild(tableBody);
    // });
}

// createTable(3, 10);
