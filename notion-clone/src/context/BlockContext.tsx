import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Block } from '../types';

interface BlockContextType {
  blocks: Block[];
  addBlock: (block: Omit<Block, 'id'>) => void;
  updateBlock: (block: Block) => void;
}

const BlockContext = createContext<BlockContextType | undefined>(undefined);

export const BlockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    axios.get('/api/blocks')
      .then(response => setBlocks(response.data))
      .catch(error => console.error('Error fetching blocks:', error));
  }, []);

  const addBlock = (block: Omit<Block, 'id'>) => {
    const newBlock = { ...block, id: Date.now().toString() };
    axios.post('/api/blocks', newBlock)
      .then(response => setBlocks([...blocks, response.data]))
      .catch(error => console.error('Error adding block:', error));
  };

  const updateBlock = (updatedBlock: Block) => {
    axios.put(`/api/blocks/${updatedBlock.id}`, updatedBlock)
      .then(response => {
        setBlocks(blocks.map(block => block.id === updatedBlock.id ? response.data : block));
      })
      .catch(error => console.error('Error updating block:', error));
  };

  return (
    <BlockContext.Provider value={{ blocks, addBlock, updateBlock }}>
      {children}
    </BlockContext.Provider>
  );
};

export const useBlocks = (): BlockContextType => {
  const context = useContext(BlockContext);
  if (context === undefined) {
    throw new Error('useBlocks must be used within a BlockProvider');
  }
  return context;
};