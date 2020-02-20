import ArithmeticInterpreter from '~/src/interpreter/ArithmeticInterpreter';
import ArithmeticLexer from '~/src/lexer/ArithmeticLexer';
import ArithmeticParser from '~/src/parser/ArithmeticParser';

test('[arithmeticInterpreter] 29 + 3 * 45 - 491 / 4 + 34', () => {
  const arithmeticLexer = new ArithmeticLexer();
  arithmeticLexer.scan({ text: '29 + 3 * 45 - 491 / 4 + 34' });
  const tokens = arithmeticLexer.getTokens();

  const arithmeticParser = new ArithmeticParser();
  const top = arithmeticParser.analyze({ tokens });

  const arithmeticInterpreter = new ArithmeticInterpreter();
  arithmeticInterpreter.interpret({ tree: top });

  const { value } = arithmeticInterpreter;
  expect(value).toBe(75.25);
});
