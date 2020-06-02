import { allSettled } from "./allSettled";

let promises = [
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
];
let result = [
  { status: "fulfilled", value: 33 },
  { status: "fulfilled", value: 66 },
  { status: "fulfilled", value: 99 },
  { status: "rejected", reason: "Error: an error" },
];
describe("All Settled Promises", () => {
  test("Should return fulfilled and rejected.", () => {
    return allSettled(promises).then((values) => {
      expect(values).toEqual(result);
    });
  });
});
