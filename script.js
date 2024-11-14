const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumeralValues = [
    {
        symbol: "M",
        value: 1000
    },
    {
        symbol: "CM",
        value: 900
    },
    {
        symbol: "D",
        value: 500
    },
    {
        symbol: "CD",
        value: 400
    },
    {
        symbol: "C",
        value: 100
    },
    {
        symbol: "XC",
        value: 90
    },
    {
        symbol: "L",
        value: 50
    },
    {
        symbol: "XL",
        value: 40
    },
    {
        symbol: "X",
        value: 10
    },
    {
        symbol: "IX",
        value: 9
    },
    {
        symbol: "V",
        value: 5
    },
    {
        symbol: "IV",
        value: 4
    },
    {
        symbol: "I",
        value: 1
    }
]

function checkUserInput() {
    const inputInt = parseInt(numberInput.value);

    if (!numberInput.value) {
        output.innerText = "Please enter a valid number";
        return;
    } else if (isNaN(inputInt) || inputInt < 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (inputInt >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    }

    output.innerText = arabicToRoman(inputInt);
    numberInput.value = "";
}

function arabicToRoman(input) {
    let result = "";

    for (let i = 0; i < romanNumeralValues.length; i++) {
        while (numberInput.value >= romanNumeralValues[i].value) {
            result += romanNumeralValues[i].symbol;
            input -= romanNumeralValues[i].value;
        }
    }

    return result;
}

convertBtn.addEventListener("click", checkUserInput);