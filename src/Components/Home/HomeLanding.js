import React, { useState } from 'react';
import { Heading, Flex, useMediaQuery } from '@chakra-ui/react';
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
			justifyContent='center'
			bgColor='color.cremita'
			id='inicio'
		>
			<Flex
				padding={10}
				flexDir='column'
				justifyContent='center'
				alignItems='center'
			>
				<Flex
					w={isMobile ? '80vw' : '40vw'}
					h='20vh'
					overflow='hidden'
					backgroundImage='/assets/back1.jpg'
					backgroundSize='100%'
					borderRadius={5}
				/>
				<Heading fontFamily='fonts.primaria' fontWeight='medium'>
					Nico & Ro
				</Heading>
				<Flex
					w={isMobile ? '80vw' : '40vw'}
					h='20vh'
					overflow='hidden'
					backgroundImage='/assets/back1.jpg'
					backgroundSize='100%'
					borderRadius={5}
				/>
				<Heading fontFamily='fonts.primaria' fontWeight='medium'>
					11 | 02 | 23
				</Heading>
				<Flex
					w={isMobile ? '80vw' : '40vw'}
					h='20vh'
					overflow='hidden'
					backgroundImage='/assets/back1.jpg'
					backgroundSize='100%'
					borderRadius={5}
					marginBottom={5}
				/>
				<Flex>
					<Timer deadline={deadline} />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HomeLanding;
