function calculate(inputString) {
  // let tools = require("./polishNotation");

  // // console.log(tools.translateToPolishNotation("2+3*3+(2-1*(3*2-3))-2"));

  // let str = tools.translateToPolishNotation(inputString);

  let str = translateToPolishNotation(inputString);

  str = str.split(" ");

  console.log(str);

  function removingEmpty() {
    let tempIndex = str.findIndex((item) => item == "");
    if (tempIndex != -1) {
      str.splice(tempIndex, 1);
      removingEmpty();
    }
  }

  removingEmpty();

  console.log(str);

  let stack = [];

  function translator(a, b, operation) {
    switch (operation) {
      case "+":
        // console.log(a + b);
        return a + b;
      case "-":
        // console.log(a - b);
        return b - a;
      case "/":
        // console.log(a / b);
        return (b * 0.001) / (a * 0.001);
      case "*":
        // console.log(a * b);
        return a * b;
      default:
        return 0;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(Number(str[i]))) {
      stack.push(Number(str[i]));
      // console.log(stack);
    } else {
      stack.push(translator(stack.pop(), stack.pop(), str[i]));
      // console.log(stack);
    }
  }

  return stack[0];
}
