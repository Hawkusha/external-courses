function task01(arg) {
  const typeOfArg = typeof arg;

  if (typeOfArg === 'number' && isNaN(arg)) {
    return undefined;
  }

  if (typeOfArg === 'number') {
    return 'number';
  }

  if (typeOfArg === 'string') {
    return 'string';
  }

  return undefined;
}

module.exports = task01;
