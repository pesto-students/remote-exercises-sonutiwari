function longestWordInString(sentence) {
  let wordsInSentence = sentence.split(" ");
  let maxlengthWord = "";
  wordsInSentence.forEach((word) => {
    maxlengthWord = word.length > maxlengthWord.length ? word : maxlengthWord;
  });
  return maxlengthWord;
}

export { longestWordInString };
