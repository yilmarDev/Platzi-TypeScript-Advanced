function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) return input.join('');
  else return input.split('');
}

// const rtaArray = parseStr('yilmar');
// console.log('rtaArray', 'yilmar =>', rtaArray);

// const rtaStr = parseStr(['y', 'i', 'l', 'm', 'a', 'r']);
// console.log('rtaStr', "['y', 'i', 'l', 'm', 'a', 'r'] =>", rtaStr);

const rtaArray = parseStr('yilmar');
if (Array.isArray(rtaArray)) rtaArray.reverse();
console.log('rtaArray', 'yilmar =>', rtaArray);

const rtaStr = parseStr(['y', 'i', 'l', 'm', 'a', 'r']);
if (typeof rtaStr === 'string') rtaStr.toLowerCase();
console.log('rtaStr', "['y', 'i', 'l', 'm', 'a', 'r'] =>", rtaStr);
