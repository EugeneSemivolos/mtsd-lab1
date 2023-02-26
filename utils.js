export function calculate(a, b, c) {
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

export function getValues(data) {
  return data.toString().trim().split(' ').map(chunk => parseFloat(chunk));
}

