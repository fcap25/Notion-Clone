import React from 'react';
import { Box } from '@chakra-ui/react';
import { Block as BlockType } from '../../types';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';

interface BlockProps {
  block: BlockType;
  updateBlock: (block: BlockType) => void;
}

const Block: React.FC<BlockProps> = ({ block, updateBlock }) => {
  return (
    <Box>
      {block.type === 'text' ? (
        <TextBlock block={block} updateBlock={updateBlock} />
      ) : (
        <ImageBlock block={block} updateBlock={updateBlock} />
      )}
    </Box>
  );
};

export default Block;
