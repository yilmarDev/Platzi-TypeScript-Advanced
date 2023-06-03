# Curso de Typescript: Tipos avanzados y funciones

- Tutor: Nicolas Molina
- Plataforma: Platzi
- Segundo curso se la serie de TS
<hr />

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
    const various: (number | string)[] = [1500, 3000, "Hola"]
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
