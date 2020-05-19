function sumAll() {
  let min = Math.min(...arguments[0]);
  let max = Math.max(...arguments[0]);
  return Math.floor((max * ++max) / 2 - (min * --min) / 2);
}

export { sumAll };
