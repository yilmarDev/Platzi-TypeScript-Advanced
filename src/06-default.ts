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
