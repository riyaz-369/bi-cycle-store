import { ObjectId } from 'mongoose';

export type TOrder = {
  id: string;
  email: string;
  product: ObjectId;
  quantity: number;
  totalPrice: number;
};
