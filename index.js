document.getElementById("startBtn").addEventListener("click", function () {

    var input = prompt("Enter command:\nabc | table | color | check | counting");
    if (!input) return;

    var cmd = input.toLowerCase();
    var output = document.getElementById("output");
    output.innerHTML = "";

    if (cmd == "color") {
        changeColor(output);
    }
    else if (cmd == "abc") {
        showABC(output);
    }
    else if (cmd == "check") {
        checkEvenOdd(output);
    }
    else if (cmd == "table") {
        showTable(output);
    }
    else if (cmd == "counting") {
        showCounting(output);
    }
    else {
        alert("Invalid command!");
    }

});

function changeColor(output) {
    var color = prompt("Enter color:");
    document.getElementById("bgBody").style.background = color;
    output.innerHTML = "Theme changed to <b>" + color + "</b>";
}

function showABC(output) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var html = '<div class="abc-container">';

    for (var i = 0; i < letters.length; i++) {
        html += '<div class="letter">' + letters.charAt(i) + '</div>';
    }

    html += "</div>";
    output.innerHTML = "<h3>Alphabets</h3>" + html;
}

function checkEvenOdd(output) {
    var num = prompt("Enter number:");
    if (!num) return;

    var isEven = (num % 2 == 0);
    var html = '<div class="evenodd-card ' + (isEven ? 'even' : 'odd') + '">';
    html += num + " is " + (isEven ? "EVEN 🟢" : "ODD 🔴");
    html += '</div>';
    output.innerHTML = html;
}

function showTable(output) {
    var num = prompt("Enter the number to create its multiplication table:");
    if (!num) return;

    var count = prompt("How many multiples do you want to see? (e.g., 10)");
    if (!count) return;

    var html = '<div class="table-card"><table>';

    for (var i = 1; i <= count; i++) {
        html += "<tr><td>" + num + " x " + i + " = <b>" + (num * i) + "</b></td></tr>";
    }

    html += '</table></div>';
    output.innerHTML = "<h3>Multiplication Table of " + num + "</h3>" + html;
}

function showCounting(output) {
    var start = prompt("Start:");
    var end = prompt("End:");
    if (start === null || end === null) return;

    start = Number(start);
    end = Number(end);

    var res = '<div class="counting-box">';
    if (start <= end) {
        for (var i = start; i <= end; i++) {
            res += '<span>' + i + '</span>';
        }
    } else {
        for (var i = start; i >= end; i--) {
            res += '<span>' + i + '</span>';
        }
    }
    res += '</div>';
    output.innerHTML = res;
}