function balancedBraces(string) {
  let stack = [];
  let parenthesisPairMap = new Map();
  parenthesisPairMap.set("}", "{");
  parenthesisPairMap.set("]", "[");
  parenthesisPairMap.set(")", "(");
  for (let index = 0; index < string.length; ++index) {
    if (string[index] === "{" || string[index] == "(" || string[index] == "[") {
      stack.push(string[index]);
    } else if (
      string[index] === "}" ||
      string[index] == ")" ||
      string[index] == "]"
    ) {
      if (stack[stack.length - 1] === parenthesisPairMap.get(string[index])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

export { balancedBraces };
