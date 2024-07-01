import React from 'react';
import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { BlockProvider } from '../src/context/BlockContext';
import Blocks from './components/Blocks';

function App() {
  return (
	<BlockProvider>
		<ChakraProvider>
			<Blocks />
		</ChakraProvider>
	</BlockProvider>
  );
}

export default App;
