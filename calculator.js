"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division

    const add = (num1,num2) => num1+num2;

    const subtract = (num1,num2) => num1-num2;

    const multiply = (num1,num2) => num1*num2;

    const divide = (num1,num2) => {
        if (num2 === 0) {
            return "Cannot divide by zero";
            }
        return num1/num2;
    }
    // console.log(divide(10,0));

// Step 02: Create a Validation Function for Inputs

    const checkInput = (num1,num2) => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return null;
        } else {
            return "Both inputs must be numbers";
        }
    }
    // console.log(checkInput(10,'0'));

// Step 03: Create a Calculator Function to Combine the Above Functions

    const calculator = (num1,num2,operation) => {
        const validateInputs = checkInput(num1,num2);
        if (validateInputs !== null) {
            return "Both inputs must be numbers"
        }
       if (operation === 'add') {
            return add(num1,num2);
        }
        else if (operation === 'subtract') {
            return subtract(num1,num2);
        }
        else if (operation === 'multiply') {
            return multiply(num1,num2);
        }
        else if (operation === 'divide') {
            return divide(num1,num2);
        }
        else {
            return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'";
        }
        return calculator(num1,num2,operation);
    }


    // console.log(calculator(10, 5, "add"))
    // console.log(calculator(10, 5, "divide"))
    // console.log(calculator(10, 0, "divide"))
    // console.log(calculator(10, 5, "unknown"))
