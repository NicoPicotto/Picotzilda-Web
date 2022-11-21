import React from 'react';
import { Heading, Flex, Button, Divider, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';


const Home = () => {
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
				{/* <Timer duration={82 * 24 * 60 * 60 * 1000} /> */}
			</Flex>
			<Flex position='absolute' bottom={5}>
				<Link to={'/nosotros'} as={ReachLink}>
					<Button
						rightIcon={<ChevronRightIcon />}
						size='sm'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Un poco sobre los novixs
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Home;
