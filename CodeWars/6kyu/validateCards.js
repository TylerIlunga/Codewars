const validate = (n) => {
  let nArray = `${n}`.split('').map(number => parseInt(number));
  let multipliedNArray = [];
  let sumOfMultipliedNArray = 0;

  for(let i = 0; i < nArray.length; i++) {
    if (nArray.length % 2 === 0) {
      if (i % 2 === 0) {
        if ((nArray[i] * 2) > 9) {
          const value = `${nArray[i]}`
            .split('')
            .reduce((sum, number) => {
              return sum += parseInt(number)
            }, 0);
          multipliedNArray.push(value);
          continue;
        }
        multipliedNArray.push(nArray[i] * 2);
        continue;
      }
      multipliedNArray.push(nArray[i]);
    } else {
      if (i % 2 !== 0) {
        if ((nArray[i] * 2) > 9) {
          const value = `${nArray[i] * 2}`
            .split('')
            .reduce((sum, number) => {
              return sum += parseInt(number)
            }, 0);
          multipliedNArray.push(value);
          continue;
        }
        multipliedNArray.push(nArray[i] * 2);
        continue;
      }
      multipliedNArray.push(nArray[i]);
    }
  }

  sumOfMultipliedNArray = multipliedNArray.reduce((sum, number) => {
    return sum += number;
  }, 0);

  if (sumOfMultipliedNArray % 10 === 0) {
    return true;
  }

  return false;
}
