function extractValues() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var checkIfCorrect = true;

    if (firstNumber == 'I') {firstNumber = 1;}
    else if (firstNumber == 'II') {firstNumber = 2;}
    else if (firstNumber == 'III') {firstNumber = 3;}
    else if (firstNumber == 'IV') {firstNumber = 4;}
    else if (firstNumber == 'V') {firstNumber = 5;}
    else if (firstNumber == 'VI') {firstNumber = 6;}
    else if (firstNumber == 'VII') {firstNumber = 7;}
    else if (firstNumber == 'VIII') {firstNumber = 8;}
    else if (firstNumber == 'VIX') {firstNumber = 9;}
    else if (firstNumber == 'X') {firstNumber = 10;}
    else {firstNumber = undefined; checkIfCorrect = false;}

    if (secondNumber == 'I') {secondNumber = 1;}
    else if (secondNumber == 'II') {secondNumber = 2;}
    else if (secondNumber == 'III') {secondNumber = 3;}
    else if (secondNumber == 'IV') {secondNumber = 4;}
    else if (secondNumber == 'V') {secondNumber = 5;}
    else if (secondNumber == 'VI') {secondNumber = 6;}
    else if (secondNumber == 'VII') {secondNumber = 7;}
    else if (secondNumber == 'VIII') {secondNumber = 8;}
    else if (secondNumber == 'VIX') {secondNumber = 9;}
    else if (secondNumber == 'X') {secondNumber = 10;}
    else {secondNumber = undefined; checkIfCorrect = false;}

    if (checkIfCorrect === false) {
        console.log('Please type in Roman Numerals between I-X (1-10)');
        resultText = 'Please type in Roman Numerals between I-X (1-10)';
    }
    else {
        console.log(firstName + ' ' + lastName + ' ' + firstNumber + ' ' + secondNumber);
        var resultText = firstName + ' ' + lastName + ' ' + firstNumber + ' ' + secondNumber;
    }

    var paragraph = document.getElementById('paragraph');
    paragraph.textContent = resultText;
}

function printPage() {
    window.print();
}
