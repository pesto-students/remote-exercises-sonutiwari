function minima(k, numbers) {
  return numbers.sort((i, j) => Number(i) - Number(j)).slice(0, k);
}

export { minima };
