function iterable(start, end) {
  const rangeObj = {
    start,
    end,
    next() {
      if (this.start <= this.end) {
        return {
          done: false,
          value: this.start++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };

  rangeObj[Symbol.iterator] = function () {
    return this;
  }.bind(rangeObj);

  return rangeObj;
}

function rangeIter(lb, ub) {
  if (!lb || !ub) throw new TypeError("undefined is not a number");
  if (typeof lb !== "number") throw new TypeError(`${lb} is not a number`);
  if (typeof ub !== "number") throw new TypeError(`${ub} is not a number`);
  const iterableObj = iterable(lb, ub);
  const range = [];
  for (const el of iterableObj) {
    range.push(el);
  }
  return range;
}

export { rangeIter };
