import React from 'react';
import { Heading, Flex, Avatar, Button, Link } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { BsSpotify } from 'react-icons/bs';
import { Link as ReachLink } from 'react-router-dom';
import ModalRocilda from '../Components/ModalRocilda/ModalRocilda';

const Nosotros = () => {
	return (
		<Flex
			w='100vw'
			h='100vh'
			alignItems='center'
			justifyContent='center'
			bgColor='color.gris'
			overflow='hidden'
			flexDir='column'
		>
			<Flex w='60vw' flexDir='column'>
				<Flex
					flexDir='column'
					justifyContent='center'
					alignItems='center'
					marginBottom={10}
				>
					<Avatar
						h='90px'
						w='90px'
						name='Christian Nwamba'
						src='https://bit.ly/code-beast'
					/>
					<Flex
						bgColor='white'
						w='100%'
						h='160px'
						alignItems='center'
						justifyContent='center'
						borderRadius={10}
						marginTop='-45px'
						flexDir='column'
					>
						<Heading
							marginTop='30px'
							fontSize='4xl'
							fontFamily='fonts.primaria'
							color='color.gris'
						>
							Rocilda
						</Heading>
						<ModalRocilda />
					</Flex>
				</Flex>
				<Flex
					flexDir='column'
					justifyContent='center'
					alignItems='center'
					marginBottom={10}
				>
					<Avatar
						h='90px'
						w='90px'
						name='Christian Nwamba'
						src='https://bit.ly/code-beast'
					/>
					<Flex
						bgColor='white'
						w='100%'
						h='160px'
						alignItems='center'
						justifyContent='center'
						borderRadius={10}
						marginTop='-45px'
					>
						<Heading
							marginTop='30px'
							fontSize='4xl'
							fontFamily='fonts.primaria'
							color='color.gris'
						>
							Nico
						</Heading>
					</Flex>
				</Flex>
				<Link
					href='https://open.spotify.com/playlist/5cBK2QK5JoWi9uKkbTHZf2?si=3bf6737768d04380'
					target='_blank'
					isExternal
				>
					<Button
						bgColor='#1db954'
						color='white'
						leftIcon={<BsSpotify />}
						w='100%'
					>
						Ponete a tono ♫
					</Button>
				</Link>
			</Flex>
			<Flex
				position='absolute'
				bottom={5}
				justifyContent='space-evenly'
				w='70%'
			>
				<Link to={'/'} as={ReachLink}>
					<Button
						leftIcon={<ChevronLeftIcon />}
						size='sm'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Atrás
					</Button>
				</Link>
				<Link to={'/evento'} as={ReachLink}>
					<Button
						rightIcon={<ChevronRightIcon />}
						size='sm'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Sobre el evento
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Nosotros;
