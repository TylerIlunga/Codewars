const countFeelings = (string, array) => {
  let feelings = array.filter(string => string.split('').every(char => string.includes(char)));

  return feelings.length === 1 ? `${feelings.length} feeling.` : `${feelings.length} feelings.`;
};


console.log(countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']));
