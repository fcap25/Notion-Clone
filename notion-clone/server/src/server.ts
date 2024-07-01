import express from 'express';
import blocksRouter from './routes/blocks';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/blocks', blocksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
