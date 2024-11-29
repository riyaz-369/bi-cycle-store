import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOrderInToDB(order);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: never) {
    console.error(error);
    if (error.name === 'ValidationError') {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        error: {
          name: error.name,
          errors: error.errors,
        },
        stack: error.stack,
      });
    }
    res.status(500).json({
      message: error?.message,
      success: false,
      error: error,
    });
  }
};

const revenueOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.revenueOrderFromDB();

    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: { totalRevenue: result },
    });
  } catch (error: never) {
    console.error(error);
    res.status(500).json({
      message: error?.message,
      success: false,
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  revenueOrder,
};
