let unknownVar: unknown;

unknownVar = 124;
unknownVar = null;
unknownVar = undefined;
unknownVar = {};
unknownVar = [];

// Esta línea da error porque es necesario validar el tipo de valor
unknownVar.toUpperCase();

// Este código funciona porque se valida que el tipo de valor sea string antes de usar una función de los string
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if(typeof unknownVar === 'boolean') {
  let unknownVarV2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
