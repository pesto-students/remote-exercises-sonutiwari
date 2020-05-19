let frequenciesOfLetters = (str) => {
  return str.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};
function duplicateLetters(...args) {
  let maxFrequency = Math.max(...Object.values(frequenciesOfLetters(args[0])));
  return maxFrequency === 1 ? false : maxFrequency;
}

export { duplicateLetters };
