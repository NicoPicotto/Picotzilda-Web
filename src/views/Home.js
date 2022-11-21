import React from 'react';
import { Heading, Flex, Button, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
				w='50vw'
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
			</Flex>
			<Flex></Flex>
			<Flex position='absolute' bottom={0} marginBottom={5}>
				<Link to={'/nosotros'}>
					<Button
						rightIcon={<ChevronRightIcon />}
						size='sm'
						color='color.bordo'
					>
						Un poco sobre los novixs
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Home;
