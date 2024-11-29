import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

// Order a Bicycle
const createOrderInToDB = async (order: TOrder) => {
  const product = await ProductModel.findById(order.product);
  if (!product) {
    throw new Error('Product not found');
  }

  if (product.quantity < order.quantity) {
    throw new Error('Insufficient stock');
  }

  product.quantity -= order.quantity;

  if (product.quantity === 0) {
    product.inStock = false;
  }

  await product.save();

  const result = await OrderModel.create(order);
  return result;
};

const revenueOrderFromDB = async () => {
  const ordersRevenue = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  let sumOfRevenue = 0;
  if (ordersRevenue.length > 0) {
    sumOfRevenue = ordersRevenue[0].totalRevenue;
  } else {
    sumOfRevenue = 0;
  }

  return sumOfRevenue;
};

export const orderService = {
  createOrderInToDB,
  revenueOrderFromDB,
};
