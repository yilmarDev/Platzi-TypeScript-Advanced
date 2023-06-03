// Arreglo con un solo tipo de datos
const prices: number[] = [1500, 3999, 10000, 300];

// Arreglo con dos tipos de datos
const various: (number | string)[] = [1500, 3000, 'Hola'];

const user: [string, number] = ['yilmardev', 30];
const product: [string, string, number, boolean] = [
  'Uniforme médico',
  'rojo',
  95000,
  true,
];

const [title, color] = product;

console.log(title);
console.log(color);
