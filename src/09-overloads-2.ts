export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) return input.join('');
  else return input.split('');
}

const rtaArray = parseStr('yilmar');
console.log('rtaArray', 'yilmar =>', rtaArray);

const rtaStr = parseStr(['y', 'i', 'l', 'm', 'a', 'r']);
console.log('rtaStr', "['y', 'i', 'l', 'm', 'a', 'r'] =>", rtaStr);
