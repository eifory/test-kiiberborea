const div = require('./division');

const testData = [
  [10, 5, 2],
  [-9, 3, -3],
  [5, 0, Infinity],
];

it.each(testData)('%s/%s should return %s', async (first, second, expected) => {
  await expect(div(first, second)).resolves.toBe(expected);
});

// it('should throw error, argument not a number', async () => {
//   const first = 'str';
//   const second = 5;
//   await expect(div(first, second)).reject.toThrow(`Only number argument expected, '${first}' is not a number`);
// });
