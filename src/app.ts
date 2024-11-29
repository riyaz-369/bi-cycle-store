import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoute } from './app/modules/product/product.route';
export const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', productRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Bi Cycle Store is Running...');
});
