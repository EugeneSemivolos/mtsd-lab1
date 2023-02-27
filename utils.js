export function calculate(params) {
  const [a, b, c] = params;
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

export function getParams(data) {
  const params = data.toString().trim().split(' ').map(chunk => {
    const param = parseFloat(chunk);
    if (isNaN(param)) {
      throw new Error(`Error. Expected a valid real number, got '${chunk}' instead`);
    }
    return param;
  });

  if (params.length !== 3) {
    throw new Error(`Error. Expected 3 params, got ${params.length} params`);
  }
  if (params[0] === 0) {
    throw new Error(`Error. parameter a cannot be 0`); 
  }

  return params;
}

export function logParams(params) {
  const [a, b, c] = params;
  console.log(`\nEquation is: (${a})x^2 + (${b})x + (${c}) = 0`);
}