export function caesarCipher(str, shift) {
  let basestr = 'aAzZ'
  const upperMin = basestr.charCodeAt(1);
  const upperMax = basestr.charCodeAt(3);
  const lowerMin = basestr.charCodeAt(0);
  const lowerMax = basestr.charCodeAt(2);

  let result ='';
  let base;
  if (shift < 0) {
    shift = (26 + (shift % 26) % 26);
  }

  [...str].forEach(char => {
    let charCode = char.charCodeAt(0);
    if (
      charCode < upperMin ||
      (charCode > upperMax && charCode < lowerMin) ||
      charCode > lowerMax
    ) {
      result += char;
    } else {
      if (charCode <= upperMax) {
        base = upperMin;
      } else {
        base = lowerMin;
      }
      let newCharCode = ((charCode - base + shift) % 26) + base;
      result += String.fromCharCode(newCharCode);
    }
  });
  return result;
}