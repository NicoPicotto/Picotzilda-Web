import React from 'react';
import EscribirMensaje from '../Components/Mensajes/EscribirMensaje';
import { Flex, Link, Button, useMediaQuery } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import MostrarMensajes from '../Components/Mensajes/MostrarMensajes';

const Mensajes = () => {

	return (
		<Flex
			w='100vw'
			h='100vh'
			alignItems='center'
			bgColor='color.gris'
			overflow='hidden'
			flexDir='column'
		>
			<Flex marginTop={5}>
				<Link to={'/'} as={ReachLink}>
					<Button
						leftIcon={<ChevronLeftIcon />}
						boxShadow='md'
						size='xs'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Volver
					</Button>
				</Link>
			</Flex>
			<EscribirMensaje />
			<MostrarMensajes />
		</Flex>
	);
};

export default Mensajes;
