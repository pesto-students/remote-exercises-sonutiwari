function curry(curriedFunction) {
  return function curried(...args) {
    if (args.length >= curriedFunction.length) {
      return curriedFunction.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

export { curry };
