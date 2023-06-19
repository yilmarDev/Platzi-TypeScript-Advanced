import { products, addProduct } from './products/product.service';
import {} from './categories/category.model';

addProduct({
  id: 45,
  title: 'Camisa a rayas',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 100,
  category: {
    id: 78,
    name: 'ropa para caballeros',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
