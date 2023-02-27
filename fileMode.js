import fs from "fs";
import { calculate, getParams, logParams } from "./utils.js";

const startFileMode = () => {
  process.stdin.removeAllListeners('data');

  console.log('\nFile mode is activated!');
  console.log('\nEnter link to the file:');

  process.stdin.on('data', (data) => {
    const link = data.toString().trim();
    const params = validateData(link);
    logParams(params);
    console.log(calculate(params));
    process.exit(0);  
  });
}

function validateData(link) {
  let fileContent = '';
  try {
    fileContent = fs.readFileSync(link, "utf8");
  } catch(err) {
    throw new Error(err);
  }
  return getParams(fileContent);
}

export default startFileMode;