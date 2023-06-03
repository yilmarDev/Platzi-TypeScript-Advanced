const withoutEnd = () => {
  while (true) {
    console.log('Hola mundo infinito');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  }
  // Así podemos comprobar si un objeto es un Array
  if (Array.isArray(input)) {
    return 'Es un arreglo';
  }
  return fail('Not match');
};

console.log('Hola mundo');
console.log([1, 5, 7, 8]);
console.log(4589);

//Esta línea nunca se va a ejecutar porque TS detiene la ejecución al detectar el never
console.log('Hola mundo');
