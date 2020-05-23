const sumEvenArgs = (...args) => {
  let sumOfEvenNumberArguments = 0;
  args.forEach((num) => {
    if (num % 2 == 0) sumOfEvenNumberArguments += num;
  });
  return sumOfEvenNumberArguments;
};

export { sumEvenArgs };
