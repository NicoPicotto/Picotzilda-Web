import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';

const Home = () => {
	return (
		<Flex
			w='100vw'
			h='100vh'
			alignItems='center'
			justifyContent='center'
			bgColor='color.bordo'
		>
			<Heading color='white'>Home</Heading>
		</Flex>
	);
};

export default Home;
