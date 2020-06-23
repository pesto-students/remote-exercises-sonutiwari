/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
  if (Array.isArray(permutationOptions) !== true) {
    throw new TypeError(
      `Array is expected, We got ${typeof permutationOptions} instead.`
    );
  }

  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  const permutationsArray = [];

  const temporaryPermutation = permutateWithoutRepetitions(
    permutationOptions.slice(1)
  );

  const firstElement = permutationOptions[0];

  for (let i = 0; i < temporaryPermutation.length; i++) {
    const permutation = temporaryPermutation[i];
    for (let j = 0; j <= permutation.length; j++) {
      permutationsArray.push(
        permutation.slice(0, j).concat([firstElement], permutation.slice(j))
      );
    }
  }
  return permutationsArray;
}

export { permutateWithoutRepetitions };
