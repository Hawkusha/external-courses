function task02(array) {
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    console.log(element);
  }

  console.log(array.length);
}

// const arr = [1, 2, 3, 4];
// task02(arr);

module.exports = task02;
