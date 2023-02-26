export function calculate(a, b, c) {
  const d = b*b - 4*a*c;
  if (d > 0) {
    const x1 = (-b - Math.sqrt(d))/(2*a);
    const x2 = (-b + Math.sqrt(d))/(2*a);
    return `There are 2 roots:\nx1 = ${x1}\nx2 = ${x2}`;
  } else if (d === 0) {
    const x = -b/(2*a);
    return `There are 1 root\nx = ${x}`;  
  } else {
    return 'There are 0 roots';
  }
}

export function getValues(data) {
  return data.toString().trim().split(' ').map(chunk => parseFloat(chunk));
}

