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

const Extras = () => {
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	return (
		<Flex
			h='100vh'
			alignItems='center'
			overflow='hidden'
			flexDir='column'
			justifyContent='center'
			bgColor='color.gris'
		>
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

export default Extras;