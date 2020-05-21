function addBigIntegers(intString) {
  const intStringArray = intString.split("\n");
  if (intStringArray.length === 0) return "";
  if (intStringArray.length === 1) return intStringArray[0];
  let ansString = intStringArray[0];
  for (let index = 1; index < intStringArray.length; ++index) {
    ansString = addTwoStringsAsNumber(ansString, intStringArray[index]);
  }
  return ansString;
}

function addTwoStringsAsNumber(intString1, intString2) {
  let digitsString1 = intString1.split("").reverse();
  let digitsString2 = intString2.split("").reverse();
  let output = "";
  let longer = Math.max(intString1.length, intString2.length);
  let carry = false;
  for (let i = 0; i < longer; i++) {
    let result;
    if (digitsString1[i] && digitsString2[i]) {
      result = parseInt(digitsString1[i]) + parseInt(digitsString2[i]);
    } else if (digitsString1[i] && !digitsString2[i]) {
      result = parseInt(digitsString1[i]);
    } else if (!digitsString1[i] && digitsString2[i]) {
      result = parseInt(digitsString2[i]);
    }

    if (carry) {
      result += 1;
      carry = false;
    }
    if (result >= 10) {
      carry = true;
      output += result.toString()[1];
    } else {
      output += result.toString();
    }
  }
  output = output.split("").reverse().join("");

  if (carry) {
    output = "1" + output;
  }
  return output;
}

export { addBigIntegers };
