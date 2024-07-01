import React from 'react';
import { useBlocks } from '../context/BlockContext';
import Block from './blocks/Block';

const BlockList: React.FC = () => {
  const { blocks, updateBlock } = useBlocks();

  return (
    <>
      {blocks.map(block => (
        <Block key={block.id} block={block} updateBlock={updateBlock} />
      ))}
    </>
  );
};

export default BlockList;
