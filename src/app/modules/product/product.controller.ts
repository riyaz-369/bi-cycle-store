import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productService.createProductInToDB(product);

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error: any) {
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

export const productController = {
  createProduct,
};
