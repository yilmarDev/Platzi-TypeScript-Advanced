import { Product } from './product.model';

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'title' | 'image' | 'color'>;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface RequiredProductDto extends Required<CreateProductDto> {}

export interface FindProductDto extends Readonly<Partial<Product>> {}
