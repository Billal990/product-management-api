import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createNewProductIntoDB = async (newProduct: Product) => {
  const result = await ProductModel.create(newProduct);
  return result;
};

const getAllProductsFromDB = async (searchTerm:string) => {
  console.log('Get All SErvice======== Query===> ', searchTerm)
  const result = searchTerm ? await ProductModel.find({name:{$regex:searchTerm, $options:'i'}}) : await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

const updateProductIntoDB = async (updateId: string, updateProduct: object) => {
  const result = await ProductModel.findByIdAndUpdate(updateId, updateProduct, {new:true});
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId);
  return result;
};


export const productServices = {
  createNewProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
