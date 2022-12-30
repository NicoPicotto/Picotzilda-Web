import React from 'react';
import { Flex, Text, Button, Link, useMediaQuery } from '@chakra-ui/react';
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
			flexDir={isDesktop ? 'row' : 'column'}
			alignItems='center'
			justifyContent={isDesktop ? 'space-evenly' : 'center'}
			bgImage='/assets/fondo.jpg'
			bgSize='cover'
			bgPos='bottom'
			bgAttachment={isDesktop && 'fixed'}
		>
			<Flex
				flexDir='column'
				w={isDesktop ? '25%' : '70%'}
				h={isDesktop && '20%'}
				justifyContent={isDesktop && 'center'}
				bgColor='rgb(17, 17, 18, 0.6)'
				borderRadius={10}
				padding={5}
				marginBottom={isDesktop ? 0 : 12}
			>
				<Text
					fontFamily='fonts.secundaria'
					marginBottom={3}
					textAlign='center'
					color='white'
					fontSize={isDesktop ? 'md' : 'sm'}
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
						fontSize={isDesktop ? 'md' : 'sm'}
						boxShadow='md'
						w='100%'
					>
						Moviditos Picotzilda
					</Button>
				</Link>
			</Flex>
			<Flex
				flexDir='column'
				bgColor='rgb(17, 17, 18, 0.6)'
				borderRadius={10}
				padding={5}
				w={isDesktop ? '25%' : '70%'}
				h={isDesktop && '20%'}
				justifyContent={isDesktop && 'center'}
			>
				<Text
					fontFamily='fonts.secundaria'
					marginBottom={3}
					textAlign='center'
					color='white'
					fontSize={isDesktop ? 'md' : 'sm'}
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
						fontSize={isDesktop ? 'md' : 'sm'}
						w='100%'
					>
						Casorio Nico & Ro
					</Button>
				</Link>
			</Flex>
			<Flex
				flexDir='column'
				bgColor='rgb(17, 17, 18, 0.6)'
				borderRadius={10}
				padding={5}
				marginTop={isDesktop ? 0 : 12}
				w={isDesktop ? '25%' : '70%'}
				h={isDesktop && '20%'}
				justifyContent={isDesktop && 'center'}
			>
				<Text
					fontFamily='fonts.secundaria'
					marginBottom={3}
					textAlign='center'
					color='white'
					fontSize={isDesktop ? 'md' : 'sm'}
				>
					Dejá un mensaje público para empezar a agitar.
				</Text>
				<Link to={'/mensajitos'} as={ReachLink}>
					<Button
						bgColor='white'
						color='color.gris'
						leftIcon={<BsFillChatFill />}
						boxShadow='md'
						fontSize={isDesktop ? 'md' : 'sm'}
						w='100%'
					>
						Panel de mensajitos
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Extras;
