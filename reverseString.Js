const reverseWord = (string) => {
  const array = string.split("").reverse().join("")
  return array;
}

module.exports = reverseWord