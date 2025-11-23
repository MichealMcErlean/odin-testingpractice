import { calculator } from './calculator.js';

describe('the calculator object', () => {

  it('adds two numbers', () => {
    expect(calculator.add(2, 3)).toEqual(5);
  });

  it('subtracts two numbers', () => {
    expect(calculator.subtract(2, 3)).toEqual(-1);
  });

  it('divides one number by another', () => {
    expect(calculator.divide(4, 2)).toEqual(2);
  });

  it('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toEqual(6);
  });

  it('gets angry if given invalid input', () => {
    expect(calculator.add( 'sheep', 'dog')).toEqual('Oi! Jerk!')
  })

})