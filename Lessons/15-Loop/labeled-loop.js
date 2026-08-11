let matrix = [
  [1, 4, 7],
  [10, 13, 15],
  [20, 22, 25],
];

findNumber: for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] === 15) {
      console.log("Found 15 at row:", row, "col:", col);
      break findNumber;
    }
  }
}
