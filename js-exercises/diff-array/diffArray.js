function diffArray(intArray1, intArray2) {
  let diffArrays = [];
  intArray1.forEach((element) => {
    if (intArray2.indexOf(element) === -1) {
      diffArrays.push(element);
    }
  });
  intArray2.forEach((element) => {
    if (intArray1.indexOf(element) === -1) {
      diffArrays.push(element);
    }
  });
  return diffArrays;
}

export { diffArray };
