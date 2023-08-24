const stringLength = require('./addLength')

test ('Properly adds the amount of letters in the string', () => {
    expect(stringLength('microverse')).toBe(10);
    expect(stringLength('')).toBe('error');
    expect(stringLength('Unimaginatively')).toBe('error');
    expect(stringLength('hey')).toBe(3);
})