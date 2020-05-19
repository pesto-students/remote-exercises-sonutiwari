function sumFibs() {
  if (arguments[0] <= 0) return 0;
  let oddFibArr = [1, 1];
  let fib = 2;
  let prev = 1;
  while (fib <= arguments[0]) {
    if (fib % 2 !== 0) oddFibArr.push(fib);
    [fib, prev] = [fib + prev, fib];
  }
  return oddFibArr.reduce((a, b) => a + b);
}

export { sumFibs };
