function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function filterPrimeNumbers() {
    const inputElement = document.getElementById("numberInput");
    const inputValues = inputElement.value.split(",").map(num => parseInt(num.trim()));
    const primeNumbers = inputValues.filter(num => isPrime(num));
    
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "Prime Numbers: " + primeNumbers.join(", ");
}
