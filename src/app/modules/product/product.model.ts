import { Schema, model } from 'mongoose';
import { Product, inventory, variants } from './product.interface';

const variantSchema = new Schema<variants>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const invetorySchema = new Schema<inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [String],
  variants: [variantSchema],
  inventory:{
    type:invetorySchema,
    required:true
  }
});

export const ProductModel = model('Product', productSchema);
