function translateToPolishNotation(input) {
  let symbols = [
    {
      sym: "+",
      priority: 2,
    },
    {
      sym: "*",
      priority: 1,
    },
    {
      sym: "-",
      priority: 2,
    },
    {
      sym: "/",
      priority: 1,
    },
    {
      sym: "(",
      priority: 0,
    },
    {
      sym: ")",
      priority: 0,
    },
  ];
  let answer = "";
  let stack = [];
  function popping(newElement, lastElement) {
    if (newElement.priority >= lastElement.priority && lastElement.sym != "(") {
      answer += `${lastElement.sym} `;
      if (stack.length != 0) {
        popping(newElement, stack.pop());
      } else {
        stack.push(newElement);
      }
    } else {
      stack.push(lastElement);
      stack.push(newElement);
    }
  }
  function poppingScobes() {
    let temp = stack.pop();
    if (stack.length != 0) {
      if (temp.sym != "(") {
        answer += temp.sym;
        poppingScobes();
      }
    }
  }

  let str = input.split(" ");
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(Number(str[i]))) {
      answer += `${str[i]} `;
    } else {
      let symbol = symbols.find((item) => item.sym == str[i]);

      if (symbol.sym == "(") {
        stack.push(symbol);
      } else if (symbol.sym == ")") {
        poppingScobes();
      } else {
        if (stack.length != 0) {
          let last_element = stack.pop();
          popping(symbol, last_element);
        } else {
          stack.push(symbol);
        }
      }
    }
  }

  while (stack.length != 0) {
    answer += `${stack.pop().sym} `;
  }
  return answer;
}
