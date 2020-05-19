function isTriangle() {
  return (
    arguments[0] + arguments[1] > arguments[2] &&
    arguments[0] + arguments[2] > arguments[1] &&
    arguments[1] + arguments[2] > arguments[0]
  );
}

export { isTriangle };
