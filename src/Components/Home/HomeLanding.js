import React, { useState } from 'react';
import {
	Heading,
	Flex,
	useMediaQuery,
} from '@chakra-ui/react';
import Timer from '../Timer/Timer';

const HomeLanding = () => {
	const [deadline] = useState('2023-02-11T18:00:00-03:00');

	const [isMobile] = useMediaQuery('(max-width: 720px)');

	return (
		<Flex

			h='100vh'
			alignItems='center'
			overflow='hidden'
			flexDir='column'
			bgImage='/assets/back1.jpg'
			bgRepeat='no-repeat'
			bgSize='cover'
			bgPos='center'
			justifyContent="center"
		>
			<Flex
				w={isMobile ? '60vw' : '550px'}
				flexDir={isMobile ? 'column' : 'row'}
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
			</Flex>
		</Flex>
	);
};

export default HomeLanding;
