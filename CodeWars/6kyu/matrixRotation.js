function rotateAgainstClockwise(matrix, times){
  if (times == 0) {
    throw 'Error'
  }

  let matrixArray = []
  matrixArray.push(matrix)

  for (var i = 0; i < matrixArray.length; i++) {
    if (matrixArray[i].length === 0) {
      throw 'Error'
    }

    if (times > matrixArray[i].length) {
      times = times % matrixArray[i].length
    }

    if (matrixArray[i] === 0) {
      throw 'Error'
    }

      for (var j = 0; i < matrixArray[i].length; j++) {
        console.log(matrixArray[i][j]);
        for (var k = 0; i < matrixArray[i][j].length; k++) {
        }
      }
  }
}

rotateAgainstClockwise([[1, 2],[3, 4]], 5)
