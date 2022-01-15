const simpleArraySum = (arrayNumbers: number[]): number => {
  const defaultValue = 0;
  return arrayNumbers.reduce(
    (accumulator, valuetToSum) => accumulator + valuetToSum,
    defaultValue
  );
};

simpleArraySum([0, 1, 2, 3]);
