import mongoose from 'mongoose';
import { app } from './app';

async function main() {
  console.log(process.env.PORT);
  try {
    await mongoose.connect(
      'mongodb+srv://bi-cycle-zone:jyC37cb4VHeVRk9e@cluster0.308otot.mongodb.net/bi-cycle-zone?retryWrites=true&w=majority&appName=Cluster0',
    );
    app.listen(5000, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
