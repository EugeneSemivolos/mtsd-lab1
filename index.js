console.log('Which mode do you want to turn on?(interactive or file)');
process.stdin.on('data', data => {
  const workingMode = data.toString().trim();
  
  if (workingMode === 'interactive') {
    console.log('Interactive mode is activated!');
  } else if (workingMode === 'file') {
    console.log('File mode is activated!');
  } else {
    console.log('Enter correct mode!');
  }
});