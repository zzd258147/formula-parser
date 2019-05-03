/* eslint-disable import/no-named-as-default-member */
import Parser from '../src/parser';

const parser = new Parser();

describe('test decimal', () => {
  it('operator: +', () => {
    expect(1.01 + 2.13).toBe(3.1399999999999997);
    expect(parser.parse('1.01 + 2.13').result).toBe(3.14);
  });

  it('operator: -', () => {
    expect(4.12 - 2.03).toBe(2.0900000000000003);
    expect(parser.parse('4.12 - 2.03').result).toBe(2.09);
  });

  it('operator: *', () => {
    expect(2.01 * 1000).toBe(2009.9999999999998);
    expect(parser.parse('2.01 * 1000').result).toBe(2010);
  });

  it('operator: /', () => {
    expect(151.3 / 100).toBe(1.5130000000000001);
    expect(parser.parse('151.3 / 100').result).toBe(1.513);
  });

  it('operator: ^', () => {
    expect(Math.pow(1.245, 2)).toBe(1.5500250000000002);
    expect(parser.parse('1.245 ^ 2').result).toBe(1.550025);
  });

  it('operator: ^', () => {
    expect(Math.pow(1.550025, 0.5)).toBe(1.2449999999999999);
    expect(parser.parse('1.550025 ^ 0.5').result).toBe(1.245);
  });

  it('operator: ROUND', () => {
    expect(Math.round((1.244 + 0.001) * 100) / 100).toBe(1.24);
    expect(parser.parse('ROUND(1.244 + 0.001, 2)').result).toBe(1.25);
  });

  it('operator: 0 /', () => {
    expect(0 / 2).toBe(0);
    expect(parser.parse('0 / 2').result).toBe(0);
  });

  it('operator: / 0', () => {
    expect(2 / 0).toBe(Infinity);
    expect(parser.parse('2 / 0')).toMatchObject({ error: '#DIV/0!', result: null });
  });

  it('operator: MIN', () => {
    expect(Math.min(2, '1')).toBe(1);
    expect(parser.parse('MIN(2, "1")').result).toBe(2);
  });

  it('operator: MIN', () => {
    expect(Math.min('2', '1')).toBe(1);
    expect(parser.parse('MIN("2", "1")').result).toBe(0);
  });
});
