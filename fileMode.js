import fs from "fs";
import { calculate, getValues } from "./utils.js";

const startFileMode = () => {
  process.stdin.removeAllListeners('data');

  console.log('\nFile mode is activated!');
  console.log('\nEnter link to the file:');

  process.stdin.on('data', (data) => {
    const link = data.toString().trim();
    const [a, b, c] = validateData(link);
    
    console.log(calculate(a, b, c));
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
  const params = fileContent.trim().split(' ').map(param => parseFloat(param));
  if (params.includes('Nan') || params.length !== 3) {
    throw new Error('Incorrect data...');
  }
  return params;
}

export default startFileMode;