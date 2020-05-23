function removeFalsyValues(array) {
  let arrayWithNoFalsyValues = [];
  array.forEach((element) => {
    if (element) arrayWithNoFalsyValues.push(element);
  });
  return arrayWithNoFalsyValues;
}

export { removeFalsyValues };
