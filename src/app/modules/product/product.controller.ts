import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productService.createProductInToDB(product);

    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: 'Bicycles retrieved successfully',
      data: result,
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

const getAProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await productService.getAProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Bicycle retrieved successfully',
      data: result,
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

const updateAProduct = async (req: Request, res: Response) => {
  const reqData = req.body;
  const { productId } = req.params;
  try {
    const result = await productService.updateAProductFromDB(
      reqData,
      productId,
    );

    res.status(200).json({
      success: true,
      message: 'Bicycle updated successfully',
      data: result,
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

const deleteAProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await productService.deleteAProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Bicycle deleted successfully',
      data: result,
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

export const productController = {
  createProduct,
  getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
};
