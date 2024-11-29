import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'Product email is required'],
    },
    product: {
      type: String,
      required: [true, 'Product id is required'],
    },

    quantity: {
      type: Number,
      required: [true, 'Product quantity is required'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
    },
  },
  { timestamps: true },
);

export const OrderModel = model<TOrder>('Orders', orderSchema);
