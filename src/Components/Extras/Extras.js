import React from 'react';
import {
	Heading,
	Flex,
	Text,
	Button,
	Link,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { BsSpotify, BsFillChatFill } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

const Extras = () => {
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	return (
		<Flex
			h='100vh'
			overflow='hidden'
			w='100%'
			flexDir='column'
			alignItems='center'
			justifyContent='center'
			bgImage='/assets/fondo.jpg'
			bgSize='cover'
			bgPos='bottom'
			bgAttachment={isDesktop && 'fixed'}
		>
			{/* <Heading
				fontWeight='bold'
				fontFamily='fonts.primaria'
				color='color.gris'
				marginBottom={5}
			>
				¡Ponete a tono!
			</Heading> */}
			<Flex
				flexDir='column'
				w='70%'
				bgColor='rgb(17, 17, 18, 0.6)'
				borderRadius={10}
				padding={5}
				marginBottom={12}
				
			>
				<Text
					fontFamily='fonts.secundaria'
					marginBottom={3}
					textAlign='center'
					color='white'
					fontSize='sm'
				>
					¿No podés esperar a la fiesta? Ponete a tono con nuestra playlist.
				</Text>
				<Link
					href='https://open.spotify.com/playlist/0Aov6TdflodjOcT6RrBvGS?si=bd3d1c472b0844ff'
					target='_blank'
					isExternal
				>
					<Button
						bgColor='white'
						color='color.gris'
						leftIcon={<BsSpotify />}
						fontSize='sm'
						boxShadow='md'
						w='100%'
						_focus={{ bgColor: '#1db954', textDecor: 'none' }}
						_after={{ bgColor: '#1db954', textDecor: 'none' }}
						_hover={{ bgColor: '#1db954', textDecor: 'none' }}
					>
						Moviditos Picotzilda
					</Button>
				</Link>
			</Flex>
			<Flex
				flexDir='column'
				w='70%'
				bgColor='rgb(17, 17, 18, 0.6)'
				borderRadius={10}
				padding={5}
				
			>
				<Text
					fontFamily='fonts.secundaria'
					marginBottom={3}
					textAlign='center'
					color='white'
					fontSize='sm'
				>
					Nuestro instagram para compartirnos la previa y el durante.
				</Text>
				<Link
					href='https://www.instagram.com/casorionicoyro/?hl=es'
					target='_blank'
					isExternal
				>
					<Button
						bgColor='white'
						color='color.gris'
						leftIcon={<RiInstagramFill size={17} />}
						boxShadow='md'
						fontSize='sm'
						w='100%'
						_focus={{ textDecor: 'none' }}
						_after={{ textDecor: 'none' }}
						_hover={{ textDecor: 'none' }}
						_active={{ textDecor: 'none' }}
					>
						Casorio Nico & Ro
					</Button>
				</Link>
			</Flex>
			<Flex
				flexDir='column'
				w='70%'
				bgColor='rgb(17, 17, 18, 0.6)'
				borderRadius={10}
				padding={5}
				marginTop={12}
			>
				<Text
					fontFamily='fonts.secundaria'
					marginBottom={3}
					textAlign='center'
					color='white'
					fontSize='sm'
				>
					Dejá un mensaje público para empezar a agitar.
				</Text>
				<Link to={'/mensajitos'} as={ReachLink}>
					<Button
						bgColor='white'
						color='color.gris'
						leftIcon={<BsFillChatFill />}
						boxShadow='md'
						fontSize='sm'
						w='100%'
						_focus={{ bgColor: '#1db954', textDecor: 'none' }}
						_after={{ bgColor: '#1db954', textDecor: 'none' }}
						_hover={{ bgColor: '#1db954', textDecor: 'none' }}
					>
						Panel de mensajitos
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Extras;
