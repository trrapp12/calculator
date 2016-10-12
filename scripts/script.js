

function getUserInput () {
    let number1 = Number(prompt ("what is your first number?"));

    let operator = prompt ("What operation do you want to perform?");

    let number2 = Number(prompt ("What is your second number?"));

    return performOperation (number1, number2, operator);
  }

getUserInput();

function performOperation (number1, number2, operator) {
    console.log("operator " + operator);
    if (operator === "+") {
      let answer = add (number1, number2);
        console.log('add');
        return answer;
  }
    if (operator === "-") {
      let answer = subtract (number1, number2);
        console.log('subtract');
        return answer;
  }

    if (operator === "*") {
      let answer = multiply (number1, number2);
        console.log('multiply');
        return answer;
  }

    if (operator === "/") {
      let answer = divide (number1, number2);
        console.log('divide');
        return answer;
    }
}


function add (number1, number2) {
  console.log('fun add');
  return (number1 + number2);
}

function subtract (number1, number2) {
  console.log('fun subtract');
  return (number1 - number2);
}

function multiply (number1, number2) {
  console.log('fun multiply');
  return (number1 * number2);
}

function divide (number1, number2) {
  console.log('fun divide');
  return (number1 / number2);
  }
