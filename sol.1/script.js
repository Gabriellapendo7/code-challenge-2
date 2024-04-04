function swapCase(string) {
    let swapString = '';

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];

        if (currentChar === currentChar.toUpperCase()) {
            swapString += currentChar.toLowerCase();
        } else {
            swapString += currentChar.toUpperCase();
        }
    }
    return swapString;
}
function swapCaseandDisplay(){
    const inputText=document.getElementById('textInput').value;
    const swapText = swapCase(inputText);
    document.getElementById('output').textContent = swapText;

}