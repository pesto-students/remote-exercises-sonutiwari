function isPrime(num) {
  for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; ++i) {
    if (num % i === 0) return false;
  }
  return true;
}
function sumPrimes() {
  let num = arguments[0];
  if (num <= 0) return 0;
  let i = 3;
  let primesSum = 2;
  while (i <= num) {
    if (isPrime(i)) {
      primesSum += i;
    }
    i += 2;
  }
  return primesSum;
}

export { sumPrimes };
