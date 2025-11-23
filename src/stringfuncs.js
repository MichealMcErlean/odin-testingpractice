export function capitalize(str) {
  let firstChar = str[0].toUpperCase();
  let restOfString = str.slice(1);
  return firstChar + restOfString;
}

export function reverseString(str) {
  let newStr = '';
  for (let i = str.length; i >= 0; i--) {
    newStr += str.charAt(i)
  }
  return newStr;
}