import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductInToDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

export const productService = {
  createProductInToDB,
};
