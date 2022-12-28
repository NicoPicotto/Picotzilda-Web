import React, { useState } from 'react';
import { Heading, Flex, useMediaQuery } from '@chakra-ui/react';
import Timer from '../Timer/Timer';

const HomeLanding = () => {
	const [deadline] = useState('2023-02-11T18:00:00-03:00');

	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	return (
		<Flex
			h='100vh'
			overflow='hidden'
			w="100%"
			flexDir='column'
			justifyContent={isDesktop ? 'center': 'flex-start'}
			bgImage={isDesktop ? '/assets/CHP_2703.jpg' : "/assets/mobilehome.jpg"}
			bgSize='cover'
			bgPos='bottom'
			bgAttachment='fixed'
		>
			<Flex
				padding={isDesktop ? 10 : 20}
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				bgColor={isDesktop ? 'rgba(255, 255, 255, 0.3)' : 'none'}
				boxShadow={isDesktop ? '0 8px 32px 0 gray' : 'none'}
				w={isDesktop ? 'fit-content' : '100%'}
				h={isDesktop ? '100%' : '40%'}
				backdropFilter={isDesktop ? 'blur(8px)' : 'none'}
				border={isDesktop ? '1px solid rgba(255, 255, 255, 0.2' : 'none'}
			>
				<Heading
					fontFamily='fonts.primaria'
					fontWeight='medium'
					fontSize={isDesktop ? '6em' : '3em'}
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
					fontSize={isDesktop ? '6em' : '3em'}
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
