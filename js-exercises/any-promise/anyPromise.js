function anyPromise(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise()
        .then((value) => resolve(value))
        .catch((error) => reject(error));
    }
    if (promises.length === 0) resolve(promises);
  });
}

export { anyPromise };
