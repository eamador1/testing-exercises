const initializeCapital = require('./capital')

test ('Capitalize the first letter of string', () => {
  expect(initializeCapital('microverse')).toBe('Microverse');
  expect(initializeCapital('erwin')).toBe('Erwin');
  expect(initializeCapital('javaScript')).toBe('JavaScript');
})