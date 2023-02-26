import { calculate, getValues } from "./utils.js";

const startInteractiveMode = () => {
  process.stdin.removeAllListeners('data');

  console.log('\nInteractive mode is activated!');
  console.log('\nEnter params a, b, c:');

  process.stdin.on('data', data => {
    const [a, b, c] = getValues(data);
    logData(a, b, c);
    calculate(a, b, c);

    console.log("\nFine! Let's take one more!");
    console.log('Enter params a, b, c:');
  });
};

function logData(a, b, c) {
  console.log(`\nEquation is: (${a})x^2 + (${b})x + (${c}) = 0`);
}



export default startInteractiveMode;