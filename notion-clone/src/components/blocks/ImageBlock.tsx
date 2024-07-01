import React, { useState } from 'react';
import { Box, Input, Image } from '@chakra-ui/react';
import { Block } from '../../types';

interface ImageBlockProps {
  block: Block;
  updateBlock: (block: Block) => void;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ block, updateBlock }) => {
  const [src, setSrc] = useState(block.src || '');
  const [height, setHeight] = useState(block.height || '');
  const [width, setWidth] = useState(block.width || '');

  const saveBlock = () => {
    const updatedBlock = { ...block, src, height, width };
    updateBlock(updatedBlock);
  };

  return (
    <Box>
      <Input
        value={src}
        onChange={(e) => setSrc(e.target.value)}
        onBlur={saveBlock}
        placeholder="Image URL"
		bgColor="white"
		mt={2}
      />
      <Input
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        onBlur={saveBlock}
        placeholder="Height (e.g., 200px)"
		bgColor="white"
		mt={2}
      />
      <Input
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        onBlur={saveBlock}
        placeholder="Width (e.g., 300px)"
		bgColor="white"
		mt={2}
      />
      {src && (
        <Image
          src={src}
          height={height}
          width={width}
          alt="User provided"
          mt={4}
        />
      )}
    </Box>
  );
};

export default ImageBlock;
