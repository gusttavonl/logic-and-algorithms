const compareTriplets = (
  aliceScore: number[],
  bobScore: number[]
): number[] => {
  let points: number[] = [0, 0];

  for (let index: number = 0; index < aliceScore.length; index++)
    aliceScore[index] > bobScore[index]
      ? points[0]++
      : aliceScore[index] < bobScore[index]
      ? points[1]++
      : "";
  return points;
};

compareTriplets([1, 2, 3], [3, 2, 5]);
