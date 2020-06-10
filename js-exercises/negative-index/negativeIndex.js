function isNumber(numberValue) {
  if (!numberValue || typeof numberValue === "symbol") {
    return false;
  }
  numberValue = Number(numberValue);
  return typeof numberValue === "number" && !isNaN(numberValue);
}

function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw TypeError("Only arrays are supported.");
  }

  const handlers = {
    get(target, property, receiver) {
      let getThisIndex = property;
      if (isNumber(property) && property < 0) {
        getThisIndex = parseInt(getThisIndex);
        getThisIndex = target.length + getThisIndex;
      }
      return Reflect.get(target, getThisIndex, receiver);
    },
    set(target, property, value) {
      let setThisIndex = property;
      if (isNumber(setThisIndex) && setThisIndex < 0) {
        setThisIndex = parseInt(setThisIndex);
        setThisIndex = target.length + setThisIndex;
      }
      return Reflect.set(target, setThisIndex, value);
    },
  };
  return new Proxy(array, handlers);
}

export { negativeIndex };
