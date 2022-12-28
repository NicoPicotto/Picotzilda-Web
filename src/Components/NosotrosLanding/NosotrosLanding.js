import React from 'react';
import {
	Heading,
	Flex,
	Avatar,
	Button,
	Link,
	useMediaQuery,
} from '@chakra-ui/react';
import { BsSpotify } from 'react-icons/bs';

const NosotrosLanding = () => {
	const [isMobile] = useMediaQuery('(max-width: 720px)');

	return (
		<Flex
			h='100vh'
			alignItems='center'
			overflow='hidden'
			flexDir='column'
			justifyContent='center'
			bgColor='color.gris'
		>
			<Flex
				w={isMobile ? '100vw' : '70vw'}
				flexDir={isMobile ? 'column' : 'row'}
				justifyContent={isMobile ? 'center' : 'space-evenly'}
				alignItems='center'
			>
				<Flex
					flexDir='column'
					w={isMobile ? '80vw' : '30vw'}
					justifyContent='center'
					alignItems='center'
					marginBottom={10}
					boxShadow='md'
				>
					<Avatar
						h={isMobile ? '90px' : '200px'}
						w={isMobile ? '90px' : '200px'}
						src='/assets/nico.jpg'
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
							fontSize={isMobile ? '4xl' : '5xl'}
							fontFamily='fonts.primaria'
							color='color.gris'
						>
							Nico
						</Heading>
					</Flex>
				</Flex>
				<Flex
					flexDir='column'
					w={isMobile ? '80vw' : '30vw'}
					justifyContent='center'
					alignItems='center'
					marginBottom={10}
					boxShadow='md'
				>
					<Avatar
						h={isMobile ? '90px' : '200px'}
						w={isMobile ? '90px' : '200px'}
						src='/assets/ro.jpg'
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
							fontSize={isMobile ? '4xl' : '5xl'}
							fontFamily='fonts.primaria'
							color='color.gris'
						>
							Rocilda
						</Heading>
					</Flex>
				</Flex>
			</Flex>
			<Flex>
				<Link
					href='https://open.spotify.com/playlist/0Aov6TdflodjOcT6RrBvGS?si=bd3d1c472b0844ff'
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

export default NosotrosLanding;
