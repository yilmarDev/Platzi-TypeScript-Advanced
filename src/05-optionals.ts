export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return { id, stock: stock || 10, isNew: isNew || true };
};

const product1 = createProduct(23, 5, true);
const product2 = createProduct(45, 5);
const product3 = createProduct(74);
console.log(product1);
console.log(product2);
