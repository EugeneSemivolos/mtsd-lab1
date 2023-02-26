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

function getValues(data) {
  return data.toString().trim().split(' ').map(chunk => parseFloat(chunk));
}

function logData(a, b, c) {
  console.log(`\nEquation is: (${a})x^2 + (${b})x + (${c}) = 0`);
}

function calculate(a, b, c) {
  const d = b*b - 4*a*c;
  if (d > 0) {
    const x1 = (-b - Math.sqrt(d))/(2*a);
    const x2 = (-b + Math.sqrt(d))/(2*a);
    console.log('There are 2 roots:');
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
  } else if (d === 0) {
    const x = -b/(2*a);
    console.log('There are 1 root:');
    console.log(`x = ${x}`);  
  } else {
    console.log('There are 0 roots');
  }
}

export default startInteractiveMode;