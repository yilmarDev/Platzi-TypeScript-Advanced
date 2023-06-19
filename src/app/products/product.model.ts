import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  title: string;
  description: string;
  image: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  isNew: boolean;
  tags: string[];
  category: Category;
}
