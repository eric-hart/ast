import ArithmeticLexer from '~/src/lexer/ArithmeticLexer';
import ArithmeticParser from '~/src/parser/ArithmeticParser';
import ArithmeticCompiler from '~/src/compiler/ArithmeticCompiler';

test('[arithmeticCompiler] 49 + 27 * 8 - 16 / 2 + 549', () => {
  const arithmeticLexer = new ArithmeticLexer();
  arithmeticLexer.scan({ text: '49 + 27 * 8 - 16 / 2 + 549' });
  const tokens = arithmeticLexer.getTokens();

  const arithmeticParser = new ArithmeticParser();
  const top = arithmeticParser.analyze({ tokens });

  const arithmeticCompiler = new ArithmeticCompiler();
  arithmeticCompiler.translate({ tree: top });

  const { sentences } = arithmeticCompiler;
  expect(sentences[0].toString()).toBe('Store[0] = 27');
  expect(sentences[1].toString()).toBe('Store[0] = Store[0] * 8');
  expect(sentences[2].toString()).toBe('Store[1] = 16');
  expect(sentences[3].toString()).toBe('Store[1] = Store[1] / 2');
  expect(sentences[4].toString()).toBe('Store[0] = 49 + Store[0]');
  expect(sentences[5].toString()).toBe('Store[1] = Store[0] - Store[1]');
  expect(sentences[6].toString()).toBe('Store[1] = Store[1] + 549');
});
