module.exports = function reverse (n) {
  let string = n.toString();
  let reversString = string.split('').reverse().join('');
  return parseInt(reversString);
}

