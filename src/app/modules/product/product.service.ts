import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductInToDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getAProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

const updateAProductFromDB = async (
  productData: TProduct,
  productId: string,
) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id: productId },
    { ...productData },
    { new: true, runValidators: true },
  );
  return result;
};

export const productService = {
  createProductInToDB,
  getAllProductFromDB,
  getAProductFromDB,
  updateAProductFromDB,
};
