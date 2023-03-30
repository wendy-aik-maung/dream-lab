export const stringConcat = (array) => {
  return array.reduce((prev, current, index) => {
    if (index === 0) {
      return current.name;
    }

    if (index === array.length - 1) {
      return prev + " and " + current.name;
    } else {
      return prev + " ," + current.name;
    }
  }, "");
};
