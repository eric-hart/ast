import ArithmeticLexer from '~/src/lexer/ArithmeticLexer';
import ArithmeticParser from '~/src/parser/ArithmeticParser';

test('[arithmeticParser] 49 + 108 * 2107 - 3 / 37 + 549', () => {
  const arithmeticLexer = new ArithmeticLexer();
  arithmeticLexer.scan({ text: '49 + 108 * 2107 - 3 / 37 + 549' });
  const tokens = arithmeticLexer.getTokens();

  const arithmeticParser = new ArithmeticParser();
  const top = arithmeticParser.analyze({ tokens });

  expect(top.toString()).toBe('<Expression>');
  expect(top.operator.toString()).toBe('<Operator, +>');

  const [left, right] = top.units;
  expect(Object.is(left.backtrack, top)).toBe(true);
  expect(Object.is(right.backtrack, top)).toBe(true);
  expect(right.toString()).toBe('<Factor>');
  expect(right.token.toString()).toBe('<Integer, 549>');
  expect(left.toString()).toBe('<Expression>');
  expect(left.operator.toString()).toBe('<Operator, ->');

  const [left2left, left2right] = left.units;
  expect(Object.is(left2left.backtrack, left)).toBe(true);
  expect(Object.is(left2right.backtrack, left)).toBe(true);
  expect(left2right.toString()).toBe('<Expression>');
  expect(left2right.operator.toString()).toBe('<Operator, />');
  expect(left2left.toString()).toBe('<Expression>');
  expect(left2left.operator.toString()).toBe('<Operator, +>');

  const [left2right2left, left2right2right] = left2right.units;
  expect(Object.is(left2right2left.backtrack, left2right)).toBe(true);
  expect(Object.is(left2right2right.backtrack, left2right)).toBe(true);
  expect(left2right2left.toString()).toBe('<Factor>');
  expect(left2right2left.token.toString()).toBe('<Integer, 3>');
  expect(left2right2right.toString()).toBe('<Factor>');
  expect(left2right2right.token.toString()).toBe('<Integer, 37>');

  const [left2left2left, left2left2right] = left2left.units;
  expect(Object.is(left2left2left.backtrack, left2left)).toBe(true);
  expect(Object.is(left2left2right.backtrack, left2left)).toBe(true);
  expect(left2left2left.toString()).toBe('<Factor>');
  expect(left2left2left.token.toString()).toBe('<Integer, 49>');
  expect(left2left2right.toString()).toBe('<Expression>');
  expect(left2left2right.operator.toString()).toBe('<Operator, *>');

  const [left2left2right2left, left2left2right2right] = left2left2right.units;
  expect(Object.is(left2left2right2left.backtrack, left2left2right)).toBe(true);
  expect(Object.is(left2left2right2right.backtrack, left2left2right)).toBe(true);
  expect(left2left2right2left.toString()).toBe('<Factor>');
  expect(left2left2right2left.token.toString()).toBe('<Integer, 108>');
  expect(left2left2right2right.toString()).toBe('<Factor>');
  expect(left2left2right2right.token.toString()).toBe('<Integer, 2107>');
});
