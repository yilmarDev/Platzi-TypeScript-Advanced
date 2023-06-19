import { faker } from '@faker-js/faker';
import {
  products,
  addProduct,
  updateProduct,
  findProducts,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    // id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    stock: faker.number.int({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['new', 'white', 'tshirt', 'clothes']),
    categoryId: faker.string.uuid(),
    // createdAt: faker.date.recent(),
    // updatedAt: faker.date.recent(),
    // category: {
    //   id: faker.datatype.uuid.toString(),
    //   name: faker.commerce.department(),
    //   createdAt: faker.date.recent(),
    //   updatedAt: faker.date.recent(),
    // },
  });
}

// console.log('Imprimiendo los productos creados', products);

const product1 = products[0];
// console.log('Imprimiendo el producto 1', product1);

const updatedProduct1 = updateProduct(product1.id, {
  title: 'New title for product 1',
  description: 'New description for product',
});

console.log('Imprimiendo el producto 1 actualizado', updatedProduct1);
