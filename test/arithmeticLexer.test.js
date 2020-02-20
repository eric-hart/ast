import ArithmeticLexer from '~/src/lexer/ArithmeticLexer';

test('[arithmeticLexer] 9 + 3 * 20 / 300 - 200', () => {
  const arithmeticLexer = new ArithmeticLexer();
  arithmeticLexer.scan({ text: '9 + 3 * 20 / 300 - 200' });

  const tokens = arithmeticLexer.getTokens();
  expect(tokens[0].toString()).toBe('<Integer, 9>');
  expect(tokens[1].toString()).toBe('<Operator, +>');
  expect(tokens[2].toString()).toBe('<Integer, 3>');
  expect(tokens[3].toString()).toBe('<Operator, *>');
  expect(tokens[4].toString()).toBe('<Integer, 20>');
  expect(tokens[5].toString()).toBe('<Operator, />');
  expect(tokens[6].toString()).toBe('<Integer, 300>');
  expect(tokens[7].toString()).toBe('<Operator, ->');
  expect(tokens[8].toString()).toBe('<Integer, 200>');
});
