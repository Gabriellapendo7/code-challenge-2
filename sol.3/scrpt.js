function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function findPrimes() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(",").map(Number);
    const primes = numbers.filter(num => isPrime(num));
    
    document.getElementById("result").innerText = "Prime numbers: " + primes.join(", ");
}
