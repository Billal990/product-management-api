import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createNewProductIntoDB = async (newProduct: Product) => {
  const result = await ProductModel.create(newProduct);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

const updateProductIntoDB = async (updateId: string, updateProduct: object) => {
  const result = await ProductModel.findByIdAndUpdate(updateId, updateProduct);
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId);
  return result;
};

const searchProductsIntoDB = async (searchTerm: string) => {
  const result = await ProductModel.find({ name: searchTerm });
  return result;
};

export const productServices = {
  createNewProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  searchProductsIntoDB,
};
