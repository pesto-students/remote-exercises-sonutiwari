async function allSettled(promises) {
  const result = [];
  for (let promise of promises) {
    try {
      const value = await promise;
      result.push({ status: "fulfilled", value });
    } catch (reason) {
      result.push({
        status: "rejected",
        reason: reason.toString().substring(0, 15),
      });
    }
  }
  return result;
}
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

// expected output:
// "fulfilled"
// "rejected"
//export { allSettled };

allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
