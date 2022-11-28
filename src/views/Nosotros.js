import React from 'react';
import {
	Heading,
	Flex,
	Avatar,
	Button,
	Link,
	useMediaQuery,
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon, ChatIcon } from '@chakra-ui/icons';
import { BsSpotify } from 'react-icons/bs';
import { Link as ReachLink } from 'react-router-dom';
import ModalRocilda from '../Components/ModalRocilda/ModalRocilda';

const Nosotros = () => {
	const [isMobile] = useMediaQuery('(max-width: 720px)');

	return (
		<Flex
			w='100vw'
			h='100vh'
			alignItems='center'
			bgColor='color.gris'
			overflow='hidden'
			flexDir='column'
		>
			<Flex
				marginTop={5}
				marginBottom={5}
				alignItems='flex-end'
				justifyContent='space-evenly'
				w={isMobile ? '80vw' : '550px'}
			>
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
				<Link to={'/evento'} as={ReachLink}>
					<Button
						rightIcon={<ChevronRightIcon />}
						size='xs'
						boxShadow='md'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Sobre el evento
					</Button>
				</Link>
			</Flex>
			<Flex
				w={isMobile ? '80vw' : '550px'}
				flexDir='column'
				h='80vh'
				justifyContent='center'
			>
				<Flex
					flexDir='column'
					justifyContent='center'
					alignItems='center'
					marginBottom={10}
					boxShadow='md'
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
					boxShadow='md'
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
						boxShadow='md'
						w='100%'
						_focus={{ bgColor: '#1db954', textDecor: 'none' }}
						_after={{ bgColor: '#1db954', textDecor: 'none' }}
						_hover={{ bgColor: '#1db954', textDecor: 'none' }}
					>
						Ponete a tono ♫
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Nosotros;
