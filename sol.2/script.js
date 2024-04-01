function generateArray(num1, num2) {
    let result = [];
    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {
            result.push(i);
        }
    } else {
        for (let i = num1; i >= num2; i--) {
            result.push(i);
        }
    }
    return result;
}
console.log(generateArray(4, 7));  // Output: [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]