import { caesarCipher } from './caesarcipher.js';

describe('The Caesar Cipher', () => {

  it('shifts each character by the given amount', () => {
    expect(caesarCipher('abcdef', 3)).toEqual('defghi');
  });

  it('respects uppercase status', () => {
    expect(caesarCipher('Thomas', 2)).toEqual('Vjqocu');
  });

  it('respects punctuation and spaces', () => {
    expect(caesarCipher('Oh yeah, man!', 13)).toEqual('Bu lrnu, zna!')
  });

  it('handles large shifts', () => {
    expect(caesarCipher('Oh woe is me!', 33)).toEqual('Vo dvl pz tl!');
  });

  it('handles negative shifts', () => {
    expect(caesarCipher('Belay this one', -10)).toEqual('Rubqo jxyi edu');
  });

})