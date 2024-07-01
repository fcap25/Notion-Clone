import React from 'react';
import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { BlockProvider } from '../src/context/BlockContext';

function App() {
  return (
	<BlockProvider>
		<ChakraProvider>
		</ChakraProvider>
	</BlockProvider>
  );
}

export default App;
