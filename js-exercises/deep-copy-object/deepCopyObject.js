const deepCopyObject = (objToCopy) => {
  if (objToCopy === null || typeof objToCopy !== "object") {
    return objToCopy;
  }
  var temporaryStorage = objToCopy.constructor();
  for (var key in objToCopy) {
    temporaryStorage[key] = deepCopyObject(objToCopy[key]);
  }
  return temporaryStorage;
};

export { deepCopyObject };
