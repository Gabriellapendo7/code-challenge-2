function generateArray() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    
    if (isNaN(start) || isNaN(end)) {
        alert("Please enter valid numbers.");
        return;
    }

    const result = [];
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
    }

    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "Generated Array: " + result.join(", ");
}
