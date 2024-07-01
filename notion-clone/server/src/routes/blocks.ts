import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const dataFile = path.join(__dirname, '../../data/blocks.json');

router.get('/', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data');
    res.send(JSON.parse(data));
  });
});

router.post('/', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data');
    const blocks = JSON.parse(data);
    const newBlock = req.body;
    blocks.push(newBlock);
    fs.writeFile(dataFile, JSON.stringify(blocks), (err) => {
      if (err) return res.status(500).send('Error saving data');
      res.send(newBlock);
    });
  });
});

router.put('/:id', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data');
    const blocks = JSON.parse(data);
    const updatedBlock = req.body;
    const index = blocks.findIndex(block => block.id === req.params.id);
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