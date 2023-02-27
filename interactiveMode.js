import { calculate, getParams, logParams } from "./utils.js";

const startInteractiveMode = () => {
  process.stdin.removeAllListeners('data');

  console.log('\nInteractive mode is activated!');
  console.log('\nEnter params a, b, c:');

  process.stdin.on('data', data => {
    const params = getParams(data);
    logParams(params);
    console.log(calculate(params));
    process.exit(0);
  });
};

export default startInteractiveMode;