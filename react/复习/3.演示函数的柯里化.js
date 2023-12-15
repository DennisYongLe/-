function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
sum(1)(2)(3);
