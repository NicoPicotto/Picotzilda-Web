import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Flex
			w='100vw'
			h='10vh'
			position='fixed'
			alignItems='center'
			justifyContent='center'
		>
			<Flex w='50vw' justifyContent='space-evenly'>
				<Link to={'/'}>
					<Button size='lg' color='color.rosita' variant='link'>
						Inicio
					</Button>
				</Link>
				<Link to={'/nosotros'}>
					<Button size='lg' color='color.rosita' variant='link'>
						Nosotros
					</Button>
				</Link>
				<Link to={'/evento'}>
					<Button size='lg' color='color.rosita' variant='link'>
						Evento
					</Button>
				</Link>
				<Link to={'/confirma'}>
					<Button size='lg' color='color.rosita' variant='link'>
						Confirmá
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Navbar;
