import React from 'react';
import EscribirMensaje from '../Components/Mensajes/EscribirMensaje';
import { Flex, Link, Button } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon, ChatIcon } from '@chakra-ui/icons';
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
			<Flex
				h='5vh'
				alignItems='flex-end'
				justifyContent='space-evenly'
				w='100vw'
			>
				<Link to={'/'} as={ReachLink}>
					<Button
						leftIcon={<ChevronLeftIcon />}
						boxShadow='md'
						size='sm'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Volver
					</Button>
				</Link>
				<Link to={'/evento'} as={ReachLink}>
					<Button
						rightIcon={<ChevronRightIcon />}
						size='sm'
						boxShadow='md'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Sobre el evento
					</Button>
				</Link>
			</Flex>
			<EscribirMensaje />
			<MostrarMensajes />
		</Flex>
	);
};

export default Mensajes;
