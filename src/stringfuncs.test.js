import { capitalize, reverseString } from './stringfuncs.js';


describe('the capitalize function', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('aquaman')).toEqual('Aquaman');
  });

  it('does nothing if already capitalized', () => {
    expect(capitalize('Frederick')).toEqual('Frederick');
  });

  it('does nothing if leading character is a digit', () => {
    expect(capitalize('123Man')).toEqual('123Man');
  })
});

describe('the reverseString function', () => {
  it('returns a new string in reverse order to the original', () => {
    expect(reverseString('Pacman')).toEqual('namcaP');
  })

  it('digits, punctuation, it reverses everything', () => {
    expect(reverseString('123$%^')).toEqual('^%$321');
  });
});