import React, { useState } from 'react';
import { Box, Button, Heading, Select } from '@chakra-ui/react';
import { useBlocks } from '../context/BlockContext';
import { Block } from '../types';

const AddBlock: React.FC = () => {
  const [type, setType] = useState('text');
  const { addBlock } = useBlocks();

  const createBlock = () => {
    const newBlock: Omit<Block, 'id'> = type === 'text' 
      ? { type: 'text', content: '', textType: 'p' }
      : { type: 'image', src: '', height: '', width: '' };
    addBlock(newBlock);
  };

  return (
    <Box>
	  <Heading size="md" mb={2}>Add a new block!</Heading>
      <Select value={type} onChange={(e) => setType(e.target.value)} bgColor={"white"}>
        <option value="text">Text</option>
        <option value="image">Image</option>
      </Select>
      <Button onClick={createBlock} mt={2} mb={2}>Add Block</Button>
    </Box>
  );
};

export default AddBlock;
