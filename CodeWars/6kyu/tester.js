const fs = require('fs');

//Currying

const multiply = (x) => {
  return (y) => {
    try {
      return x * y;
    } catch (e) {
      throw e.message;
    } finally {
    }
  }
};

const combine = multiply;

const result = combine(92903)(23923) * multiply(23923923)(2939232);

console.log(result);

//closures

const sum = (sum, transactions) => {
  return sum += transactions.amount;
}

const heldTokens = [
  { amount: 250 }, { amount: 350 },
  { amount: 450 }, { amount: 550 },
  { amount: 650 }, { amount: 750 },
  { amount: 850 }, { amount: 950 },
];

const ammulateMarketCap = heldTokens.reduce(sum, 0);

console.log(ammulateMarketCap);

//Currying

let output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(/\s/))
    .reduce((beings, line) => {
      beings[line[0]] = beings[line[0]] || [];
      beings[line[0]].push({
        occupation: line[1],
        age: line[2],
        DOB: line[3],
      })
      return beings;
    }, {})

console.log('output', JSON.stringify(output, null, 2));

//Recursion

const categories = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent: 'Mammals'},
  {id: 'chowchow', parent: 'Dogs'},
  {id: 'pomsky', parent: 'Dogs'},
  {id: 'Cats', parent: 'Mammals'},
  {id: 'persian', parent: 'Cats'},
  {id: 'garfield', parent: 'Cats'},
  {id: 'Computers', parent: null},
  {id: 'Servers', parent: 'Computers'},
  {id: 'US-WEST', parent: 'Servers'},
  {id: 'US-EAST', parent: 'Servers'},
  {id: 'Addias', parent: 'US-WEST'},
  {id: 'www.addias.com', parent: 'Addias'},
  {id: 'IBM', parent: 'US-EAST'},
  {id: 'www.ibm.com', parent: 'IBM'},
];

const makeTree = (categories, parent) => {
  let node = {};

  categories
    .filter(category => category.parent === parent)
    .map(category => {
      node[category.id] = makeTree(categories, category.id)
    })

  return node;
}

console.log(
  JSON.stringify(makeTree(categories, null), null, 2)
);

//Module Pattern

const modExample = (function(message){
  let messageObject = {};
  messageObject['message'] = message;

  messageObject.greeting = () => {
    return `Tyler, ${messageObject.message}`
  }

  return messageObject.greeting();
}('how are you?'))

console.log(modExample);
