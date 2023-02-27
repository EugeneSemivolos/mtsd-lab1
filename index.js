import startFileMode from "./fileMode.js";
import startInteractiveMode from "./interactiveMode.js";

console.log('Which mode do you want to turn on?(interactive or file)');
process.stdin.on('data', data => {
  const workingMode = data.toString().trim();
  
  if (workingMode === 'interactive') {
    startInteractiveMode();
  } else if (workingMode === 'file') {
    startFileMode();
  } else {
    console.log("\nIncorrect mode! Please, enter 'interactive' or 'file' to choose mode");
  }
});