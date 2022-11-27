import React, { useEffect } from 'react';
import { Flex, Divider, Text, Heading } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

const Mensaje = ({ nombre, mensaje }) => {
	return (
		<Flex
			flexDir='column'
			bgColor='white'
			borderRadius={10}
			w='70vw'
			padding={2}
			margin={2}
			boxShadow='md'
		>
			<Flex alignItems='center'>
				<ChatIcon />
				<Heading
					size='sm'
					marginBottom={1}
					marginLeft={2}
					marginRight={2}
					fontFamily='fonts.secundaria'
				>
					{nombre}{' '}
				</Heading>
			</Flex>
			<Divider borderColor='color.bordo' marginBottom={2} />
			<Text fontSize='sm' fontFamily='fonts.secundaria' marginBottom={1}>
				{mensaje}
			</Text>
		</Flex>
	);
};

export default Mensaje;
