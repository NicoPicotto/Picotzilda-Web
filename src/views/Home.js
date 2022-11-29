import React, { useState } from 'react';
import {
	Heading,
	Flex,
	Button,
	Divider,
	Link,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { ChevronRightIcon, ChatIcon } from '@chakra-ui/icons';
import Timer from '../Components/Timer/Timer';

const Home = () => {
	const [deadline, setDeadline] = useState('2023-02-11T18:00:00-03:00');

	const [isMobile] = useMediaQuery('(max-width: 720px)');

	return (
		<Flex
			w='100vw'
			h='100vh'
			alignItems='center'
			bgColor='color.cremita'
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
				<Link to={'/mensajes'} as={ReachLink}>
					<Button
						rightIcon={<ChatIcon />}
						boxShadow='md'
						size='xs'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Dejanos un mensajes
					</Button>
				</Link>
				<Link to={'/evento'} as={ReachLink}>
					<Button
						rightIcon={<ChevronRightIcon />}
						size='xs'
						color='color.bordo'
						fontFamily='fonts.secundaria'
						boxShadow='md'
					>
						¡Contame más!
					</Button>
				</Link>
			</Flex>
			<Flex
				w={isMobile ? '60vw' : '550px'}
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				h='70vh'
			>
				<Heading
					fontSize='8xl'
					fontFamily='fonts.primaria'
					color='color.bordo'
					fontWeight='medium'
				>
					11
				</Heading>
				<Divider borderColor='color.bordo' />
				<Heading
					fontSize='8xl'
					fontFamily='fonts.primaria'
					color='color.bordo'
					fontWeight='medium'
				>
					02
				</Heading>
				<Divider borderColor='color.bordo' />
				<Heading
					fontSize='8xl'
					fontFamily='fonts.primaria'
					color='color.bordo'
					fontWeight='medium'
				>
					23
				</Heading>
				<Timer deadline={deadline} />
			</Flex>
		</Flex>
	);
};

export default Home;
