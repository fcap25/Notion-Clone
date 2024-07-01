import express from 'express';
//import blocksRouter from './routes/blocks'; implement in back-end phase later

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
//app.use('/api/blocks', blocksRouter); implement in back-end phase later

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});