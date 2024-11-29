import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

// Create a Bicycle
const createProductInToDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// Get All Bicycles
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// Get a Specific Bicycle
const getAProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

// Update a Bicycle...
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

// Delete a Bicycle
const deleteAProductFromDB = async (productId: string) => {
  await ProductModel.findByIdAndDelete({ _id: productId });
  return {};
};

export const productService = {
  createProductInToDB,
  getAllProductFromDB,
  getAProductFromDB,
  updateAProductFromDB,
  deleteAProductFromDB,
};
