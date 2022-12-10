import React, { useState } from 'react';
import {
	Heading,
	Flex,
	Button,
	Link,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { ChevronRightIcon} from '@chakra-ui/icons';
import Timer from '../Components/Timer/Timer';

const Home = () => {
	const [deadline, setDeadline] = useState('2023-02-11T18:00:00-03:00');

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
				w={isMobile ? '60vw' : '550px'}
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				h='100vh'
			>
				<Heading
					fontSize='9xl'
					fontFamily='fonts.primaria'
					color='white'
					fontWeight='medium'
					lineHeight={1}
				>
					11
				</Heading>

				<Heading
					fontSize='9xl'
					fontFamily='fonts.primaria'
					color='white'
					fontWeight='medium'
					lineHeight={1}
				>
					02
				</Heading>

				<Heading
					fontSize='9xl'
					fontFamily='fonts.primaria'
					color='white'
					fontWeight='medium'
					lineHeight={1}
				>
					23
				</Heading>
				<Timer deadline={deadline} />
				<Flex justifyContent='center' marginTop={5}>
					<Link to={'/evento'} as={ReachLink}>
						<Button
							rightIcon={<ChevronRightIcon />}
							size='sm'
							color='color.gris'
							fontFamily='fonts.secundaria'
							boxShadow='md'
						>
							ENTRAR
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Home;
