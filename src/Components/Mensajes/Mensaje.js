import React from 'react';
import { Flex, Divider, Text, Heading } from '@chakra-ui/react';

const Mensaje = ({ nombre, mensaje, fecha }) => {
	return (
		<Flex
			flexDir='column'
			bgColor='white'
			borderRadius={10}
			w='70vw'
			padding={2}
			margin={2}
		>
			<Flex alignItems='center' boxShadow="md">
				<Heading
					size='sm'
					marginBottom={1}
					marginRight={2}
					fontFamily='fonts.secundaria'
				>
					{nombre}{' '}
				</Heading>
			</Flex>

			<Divider borderColor='color.bordo' />
			<Text fontSize='md' fontFamily='fonts.secundaria' marginBottom={1}>
				{mensaje}
			</Text>
		</Flex>
	);
};

export default Mensaje;
