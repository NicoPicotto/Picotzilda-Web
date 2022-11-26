import React, { useState } from 'react';
import { Heading, Flex, Button, Divider, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { ChevronRightIcon, ChatIcon } from '@chakra-ui/icons';
import Timer from '../Components/Timer/Timer';

const Home = () => {
	const [deadline, setDeadline] = useState('2023-02-11T18:00:00-03:00');

	return (
		<Flex
			w='100vw'
			h='100vh'
			alignItems='center'
			justifyContent='center'
			bgColor='color.cremita'
			overflow='hidden'
			flexDir='column'
		>
			<Flex position='absolute' top={5}>
				<Link to={'/mensajes'} as={ReachLink}>
					<Button
						rightIcon={<ChatIcon />}
						boxShadow="md"
						size='sm'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Dejanos un mensajito
					</Button>
				</Link>
			</Flex>
			<Flex
				w='40vw'
				flexDir='column'
				justifyContent='center'
				alignItems='center'
			>
				<Heading
					fontSize='9xl'
					fontFamily='fonts.primaria'
					color='color.bordo'
					fontWeight='medium'
				>
					11
				</Heading>
				<Divider borderColor='color.bordo' />
				<Heading
					fontSize='9xl'
					fontFamily='fonts.primaria'
					color='color.bordo'
					fontWeight='medium'
				>
					02
				</Heading>
				<Divider borderColor='color.bordo' />
				<Heading
					fontSize='9xl'
					fontFamily='fonts.primaria'
					color='color.bordo'
					fontWeight='medium'
				>
					23
				</Heading>
				<Timer deadline={deadline} />
			</Flex>
			<Flex position='absolute' bottom={5}>
				<Link to={'/nosotros'} as={ReachLink}>
					<Button
						rightIcon={<ChevronRightIcon />}
						size='sm'
						color='color.bordo'
						fontFamily='fonts.secundaria'
						boxShadow="md"
					>
						Un poco sobre los novixs
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Home;
