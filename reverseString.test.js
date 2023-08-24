const reverseWord = require ('./reverseString')

test ('Reverse string submitted', () => {
  expect(reverseWord('microverse')).toBe('esrevorcim');
  expect(reverseWord('hello')).toBe('olleh');

})