(function () {
  function getUserInput () {
      let number1 = Number( prompt("what is your first number?"));

      let operator = prompt("What operation do you want to perform?  Type \"+\"  for add,  \"-\"  for subtract,  \"*\"  for multiplication,  or \"/\"  for division. ");

      let number2 = Number( prompt("What is your second number?"));

      return performOperation (number1, number2, operator);
    }

  getUserInput();

  function performOperation (number1, number2, operator) {
      if (operator === "+") {
        let answer = add (number1, number2);
          alert("your answer is: " + answer)
          return answer;
    }
      if (operator === "-") {
        let answer = subtract (number1, number2);
          alert("your answer is: " + answer)
          return answer;
    }

      if (operator === "*") {
        let answer = multiply (number1, number2);
          alert("your answer is: " + answer)
          return answer;
    }

      if (operator === "/") {
        let answer = divide (number1, number2);
          alert("your answer is: " + answer)
          return answer;
      }
  }


  function add (number1, number2) {
    return (number1 + number2);
  }

  function subtract (number1, number2) {
    return (number1 - number2);
  }

  function multiply (number1, number2) {
    return (number1 * number2);
  }

  function divide (number1, number2) {
    return (number1 / number2);
    }
})();
