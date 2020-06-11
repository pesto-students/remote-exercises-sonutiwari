import { anyPromise } from "./anyPromise";

describe("any promise", () => {
  test("should handle empty array", async () => {
    const promises = [];
    await anyPromise(promises).then((value) => {
      expect(value).toStrictEqual([]);
    });
  });
});
