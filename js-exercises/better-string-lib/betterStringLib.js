export function reverse(string) {
  return Array.from(string.normalize("NFC")).reverse().join("");
}
export function equal(string1, string2) {
  return string1.localeCompare(string2) === 0;
}

export { reverse, equal };
