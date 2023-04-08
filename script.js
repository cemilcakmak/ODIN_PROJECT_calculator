const numbers = document.querySelectorAll('.number');
const displayContainer = document.querySelector('#display-screen');
const resultButton = document.querySelector('#result');
const operations = document.querySelectorAll('.operation');

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        reflectToDisplay(operation.textContent);
    });
});

resultButton.addEventListener('click', () => {
    const inputArray = displayContainer.textContent.split(/([+\-*/])/);
    operate(inputArray[0], inputArray[2], inputArray[1]);
});

numbers.forEach(number => {
    number.addEventListener('click', () => {
        console.log(number);
        reflectToDisplay(number.textContent);
    });
});

function reflectToDisplay(numberText) {
    displayContainer.textContent = displayContainer.textContent.concat(numberText);
}

const operationsObject = {
    "+": function(num1, num2) {
        return num1 + num2;
    },
    "-": function(num1, num2) {
        return num1 - num2;
    },
    "*": function(num1, num2) {
        return num1 * num2;
    },
    "/": function(num1, num2) {
        if (num2 === 0) {
            return "ERROR";
        }
        return num1 / num2;
    }
};

function operate(num1, num2, operation) {
    displayContainer.textContent = operationsObject[operation](parseFloat(num1), parseFloat(num2));
};
