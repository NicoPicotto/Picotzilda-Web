import React from 'react';
import EscribirMensaje from '../Components/Mensajes/EscribirMensaje';
import { Flex, Link, Button } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import MostrarMensajes from '../Components/Mensajes/MostrarMensajes';

const Mensajes = () => {
	return (
		<Flex
			w='100vw'
			h='100vh'
			alignItems='center'
			bgColor='color.bordo'
			overflow='hidden'
			flexDir='column'
		>
			<MostrarMensajes />
			<EscribirMensaje />
			<Flex h='10vh' alignItems='center'>
				<Link to={'/nosotros'} as={ReachLink}>
					<Button
						leftIcon={<ChevronLeftIcon />}
						size='sm'
						boxShadow="md"
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Volver
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Mensajes;
