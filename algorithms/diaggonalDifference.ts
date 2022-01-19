const diagonalDifference = (array) => {
  const arrayLentgh = array.length;
  let diagonalOne = 0;
  let diagonalTwo = 0;
  for (let index = 0; index < arrayLentgh; index++) {
    for (
      let positionMatrix = 0;
      positionMatrix < arrayLentgh;
      positionMatrix++
    ) {
      if (index === positionMatrix) {
        diagonalOne += array[index][positionMatrix];
      }
      if (index + positionMatrix === arrayLentgh - 1) {
        diagonalTwo += array[index][positionMatrix];
      }
    }
  }
  return Math.abs(diagonalOne - diagonalTwo);
};
