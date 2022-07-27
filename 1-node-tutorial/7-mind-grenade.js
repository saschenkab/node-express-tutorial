const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is: ${num1 + num2}`);
}

addValues(); // this function will show its result even if its called in another module because its already been called here
