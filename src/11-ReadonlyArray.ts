const mutableNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Métodos mutables que modifican directamente el array
mutableNumbers.push(5);
mutableNumbers.pop();
mutableNumbers.unshift(2);

const inmutableNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5, 5, 6, 7, 8];

//Métodos inmutables que no modifican el array original, en su lugar crear
// una copia de este.
inmutableNumbers.filter(() => {});
inmutableNumbers.reduce(() => 0);
inmutableNumbers.map(() => 0);
