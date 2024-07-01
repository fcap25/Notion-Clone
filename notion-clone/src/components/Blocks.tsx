import React from 'react';
import { Stack, Flex } from '@chakra-ui/react';
import { useBlocks } from '../context/BlockContext'; // Assuming BlockContext is in the src folder
import Block from './blocks/Block'; // Ensure the correct path
import AddBlock from './AddBlock';

const Blocks: React.FC = () => {
  const { blocks, updateBlock } = useBlocks();

  return (
	<Flex direction={"column"} align={"center"} justify={"center"} h="100vh" w="100%" bgColor={"#FFCA7B"}>
    <Stack direction="column" spacing={4} align="stretch" w="80%" overflow={"auto"}>
      {blocks.map(block => (
        <Block key={block.id} block={block} updateBlock={updateBlock} />
      ))}
      <AddBlock />
    </Stack>
	</Flex>
  );
};

export default Blocks;
