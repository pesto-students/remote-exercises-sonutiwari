import { longestWordInString } from "./longestWordInString";

describe("longestWordInString", () => {
  // write your own test cases
  it("Shall return longest word from given string", () => {
    expect(longestWordInString("this is a sentence")).toBe("sentence");
  });
});
