import React, { useState } from 'react';
import { Heading, Flex, useMediaQuery } from '@chakra-ui/react';
import Timer from '../Timer/Timer';

const HomeLanding = () => {
	const [deadline] = useState('2023-02-11T18:00:00-03:00');

	const [isMobile] = useMediaQuery('(max-width: 720px)');

	return (
		<Flex
			h='100vh'
			overflow='hidden'
			flexDir='column'
			justifyContent={isMobile ? 'flex-start' : 'center'}
			bgImage='/assets/CHP_2703.jpg'
			bgSize='cover'
			bgPos={isMobile ? '80% 100%' : 'bottom'}
			bgAttachment='fixed'
		>
			<Flex
				padding={isMobile ? 10 : 20}
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				bgColor={isMobile ? 'none' : 'rgba(255, 255, 255, 0.3)'}
				boxShadow={isMobile ? 'none' : '0 8px 32px 0 gray'}
				w={isMobile ? '100%' : 'fit-content'}
				h={isMobile ? '40%' : '100%'}
				backdropFilter={isMobile ? 'none' : 'blur(8px)'}
				border={isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.2'}
			>
				<Heading
					fontFamily='fonts.primaria'
					fontWeight='medium'
					fontSize={isMobile ? '3em' : '6em'}
					color="white"
					textShadow={"2px 2px 4px gray"}
				>
					Nico & Ro
				</Heading>

				<Heading
					fontFamily='fonts.primaria'
					color="white"
					textShadow={"2px 2px 4px gray"}
					fontWeight='medium'
					fontSize={isMobile ? '3em' : '6em'}
				>
					11 | 02 | 23
				</Heading>

				<Flex>
					<Timer deadline={deadline} />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HomeLanding;
