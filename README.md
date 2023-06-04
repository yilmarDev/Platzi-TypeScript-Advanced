# Curso de Typescript: Tipos avanzados y funciones

- Tutor: Nicolas Molina
- Plataforma: Platzi
- Segundo curso se la serie de TS
<hr />

# Módulo 1: Introducción

## Lección 3: Enum

Se declaran con la palabra reservada "enum" y sus nombre se escriben con mayúsculas, igual que los types nos permiten establecer un conjunto de valores posibles para una variable, pero tienen la ventaja de que estos valores se muestran directamente en el editor de código al momento de usar el enum.
Esto hace que sea más fácil usar los valores correctos y evita que se comentan errores en el código.

<pre>
  <code>
    enum ROLES {
      ADMIN = "admin",
      SELLER = "seller",
      CUSTOMER = "customer",
    }
  </code>
</pre>

## Leccion 4: Tuplas

Permiten definir Arreglos fuertemente tipados y establecer característacas en las posiciones de los elementos y en la cantidad de los mismos.

Es decir que permiten limitar las posiciones de los arreglos y definir el tipo de dato para cada posición.

### Tipando arreglos sin tuplas

<pre>
  <code>
    // Arreglo con un solo tipo de datos
    const prices: number[] = [1500, 3999, 10000, 300];

    // Arreglo con dos tipos de datos
    const various: (number | string)[] = [1500, 3000, "Hola"];
  </code>
</pre>

### Tipando arreglos con tuplas

<pre>
  <code>
    // Arreglo de 2 elementos; string y number
    const user: [string, number] = ["yilmardev", 30];

    //array de 4 elementos; 2 string 1 number y 1 boolean
    const product: [string, string, number, boolean] = ["Uniforme médico", "rojo", 95000, true];
  </code>
</pre>

### Haciendo desctructuración

Las tuplas permiten hacer desctructuración

<pre>
  <code>
    //array de 4 elementos; 2 string 1 number y 1 boolean
    const product: [string, string, number, boolean] = [
      'Uniforme médico',
      'rojo',
      95000,
      true,
    ];

    const [title, color] = product;
  </code>
</pre>

## Tipo unknow

Es una mejor forma de evitar el tipo "any". Es un tipado que nos permite cambiar el tipo de dato que contiene la variable, es esto es muy similar a any.

Sin embargo, unknow no permite ejecutar funciones sin verfificar el tipo de dato.

<pre>
  <code>
    let unknowVar: unknown;

    // el tipo unknown permite cambiar el tipo de valor de las variables 
    unknownVar = 124;
    unknownVar = null;
    unknownVar = undefined;
    unknownVar = {};
    unknownVar = [];

    // Sin embargo, esta línea da error porque es necesario validar el tipo de valor
    unknownVar.toUpperCase();

    // Este código funciona porque se hace "verificación de tipo" antes de usar una función de los string
    if (typeof unknownVar === 'string') {
      unknownVar.toUpperCase();
    }

    // Haciendo validación de tipo para asignar el valor unknown a otra variable
    if(typeof unknownVar === 'boolean') {
      let unknownVarV2: boolean = unknownVar;
    }
  </code>
</pre>

Aplicándolo en funciones

<pre>
  <code>
    const parse = (str: string): unknown => {
      return JSON.parse(str);
    }
  </code>
</pre>

## Tipo Never

El tipo "never" se usa para funciones que sabemos que nunca van a terminar, como los ciclos infinitos.
TypeScript es capaz de detectar cuando una función nunca se va a detener y la tipa como "never", deteniendo la ejecución de la aplicación.

<pre>
  <code>
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
  </code>
</pre>
<hr />

# Módulos 2: Funciones

## Parámetros opcionales y Nullish-coalescing

### Parámetros opcionales

Los parámetros opcionales en funciones TS se declaran al añadir un signo de interrogación junsto despues de declarar el parámetro y deben ir al final de la lista de parámetros aceptados por la función.

<pre>
  <code>
    export const createProduct = (
      id: string | number,
      stock?: number,
      isNew?: boolean
    ) => {
      return { id, stock, isNew };
    };
  </code>
</pre>

En caso de que los parámetros opcionales no se envíen, estos quedarán como undefined, lo que puede causar errores o problemas que van a necesitar validaciones a futuro, para evitar eso podemos establecer valores por defecto para estos parámetros usando "||".

<pre>
  <code>
    export const createProduct = (
      id: string | number,
      stock?: number,
      isNew?: boolean
    ) => {
      return { id, stock: stock || 10, isNew: stock || true };
    };
  </code>
</pre>

Así, los parámetros opcionales siempre van a tener un vlor definido. Aunque el operador "||" tiene algunos problemas, ya que JS interpreta los valores "0", "" y false como false, así que si se reciben estos valores en uno de los parámetros opcionales se va a utilizar el valor predeterminado, y esto no es lo que queremos.

### Nullish-coalescing "??"

La solución de JS para este problema es el operador Nullish-coalescing "??", que solo va a usar la parte derecha del operador, si la parte izquierda es "null" o "undefined".

<pre>
  <code>
    export const createProduct = (
      id: string | number,
      stock?: number,
      isNew?: boolean
    ) => {
      return { id, stock: stock ?? 10, isNew: stock ?? true };
    };
  </code>
</pre>

## Parámetros por defecto en TypeScript

TypeScrip también permite manejar parámetros por defecto, esta es la forma en que se usa:

<pre>
  <code>
    export const createProduct = (
      id: string | number,
      stock: number = 10,
      isNew: boolean = true
    ) => {
      return { id, stock, isNew };
    };

    const product1 = createProduct(23, 5, false);
    const product2 = createProduct(45, 5);
    const product3 = createProduct(74);
    
    console.log(product1);
    console.log(product2);
    console.log(product3);
  </code>
</pre>

# Parámetros REST

La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.

<pre>
  <code>
    function sum(...theArgs) {
      let total = 0;
      for (const arg of theArgs) {
        total += arg;
      }
      return total;
    }

    console.log(sum(1, 2, 3));
    // Expected output: 6

    console.log(sum(1, 2, 3, 4));
    // Expected output: 10
  </code>
</pre>

Ejemplo más detallado en el archivo src/07-rest.ts


