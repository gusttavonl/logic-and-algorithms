const plusMinus = (arrayNumbers: number[]): void => {
  const positiveNumber = arrayNumbers.filter((number) => number > 0).length;
  const negativeNumber = arrayNumbers.filter((number) => number < 0).length;
  const integerNumber = arrayNumbers.filter((number) => number === 0).length;

  return console.log(
    positiveNumber.toFixed(6) +
      "\n" +
      negativeNumber.toFixed(6) +
      "\n" +
      integerNumber.toFixed(6)
  );
};

plusMinus([0.1, 1, 1.01]);
