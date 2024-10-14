
function rotateMatrix(matrix) {
  // Transpose the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

const matrix = [
  [0, 0, 0],
  [0, 0, 1],
  [1, 1, 1]
];

console.log(rotateMatrix(matrix));