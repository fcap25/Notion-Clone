import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useBlocks } from '../context/BlockContext';
//import Block from './Block'; yet to be created
//import AddBlock from './AddBlock'; yet to be created

const Blocks = () => {
  const { blocks } = useBlocks();

  return (
	<Stack direction="column" spacing={4} align="stretch">
	  {/* {blocks.map(block => (
		<Block key={block.id} block={block} />
	  ))} */}
	  {/* <AddBlock /> */}
	</Stack>
  );
};