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

export { allSettled };
