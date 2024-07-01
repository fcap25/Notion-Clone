import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const dataFile = path.join(__dirname, '../../data/blocks.json');

// Fetch all blocks
router.get('/', (req: Request, res: Response) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data');
    res.send(JSON.parse(data));
  });
});

// Add a new block
router.post('/', (req: Request, res: Response) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data');
    const blocks = JSON.parse(data);
    const newBlock = { ...req.body, id: Date.now().toString() }; // Adding an id to the new block
    blocks.push(newBlock);
    fs.writeFile(dataFile, JSON.stringify(blocks), (err) => {
      if (err) return res.status(500).send('Error saving data');
      res.send(newBlock);
    });
  });
});

// Update an existing block
router.put('/:id', (req: Request, res: Response) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data');
    const blocks = JSON.parse(data);
    const updatedBlock = req.body;
    const index = blocks.findIndex((block: { id: string; }) => block.id === req.params.id);
    if (index !== -1) {
      blocks[index] = updatedBlock;
      fs.writeFile(dataFile, JSON.stringify(blocks), (err) => {
        if (err) return res.status(500).send('Error saving data');
        res.send(updatedBlock);
      });
    } else {
      res.status(404).send('Block not found');
    }
  });
});

export default router;
