function chunkArrayInGroups(array, chunkSize) {
  let chunkedArray = [];
  for (let index = 0; index < array.length; index += chunkSize) {
    let newRow = array.slice(index, index + chunkSize);
    chunkedArray.push(newRow);
  }
  return chunkedArray;
}

export { chunkArrayInGroups };
