function calculate(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;

    case "subtract":
      return num1 - num2;

    case "multiply":
      return num1 * num2;

    case "divide":
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;

    case "square":
      return num1 ** 2;

    case "squareRoot":
      if (num1 < 0) {
        return "Error: Cannot calculate square root of negative number";
      }
      return Math.sqrt(num1);

    default:
      return "Error: Invalid operation";
  }
}

