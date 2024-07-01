import React, { useState } from 'react';
import { Box, Input, Select, Text } from '@chakra-ui/react';
import { Block } from '../../types';

interface TextBlockProps {
  block: Block;
  updateBlock: (block: Block) => void;
}

const TextBlock: React.FC<TextBlockProps> = ({ block, updateBlock }) => {
  const [text, setText] = useState(block.content || '');
  const [type, setType] = useState(block.textType || 'p');

  const saveBlock = () => {
    const updatedBlock = { ...block, content: text, textType: type };
    updateBlock(updatedBlock);
  };

  const renderText = () => {
    switch (type) {
      case 'h1':
        return <Text as="h1" fontSize="2xl">{text}</Text>;
      case 'h2':
        return <Text as="h2" fontSize="xl">{text}</Text>;
      case 'h3':
        return <Text as="h3" fontSize="lg">{text}</Text>;
      default:
        return <Text as="p">{text}</Text>;
    }
  };

  return (
    <Box>
      <Select value={type} onChange={(e) => setType(e.target.value)} onBlur={saveBlock} bgColor="white">
        <option value="h1">H1</option>
        <option value="h2">H2</option>
        <option value="h3">H3</option>
        <option value="p">Paragraph</option>
      </Select>
      <Input value={text} onChange={(e) => setText(e.target.value)} onBlur={saveBlock} placeholder="Enter text here" bgColor="white" mt={2} />
      <Box mt={4}>
        {renderText()}
      </Box>
    </Box>
  );
};

export default TextBlock;
