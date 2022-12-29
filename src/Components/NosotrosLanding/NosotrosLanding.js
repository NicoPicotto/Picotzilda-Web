import React from 'react';
import { Heading, Flex, Avatar, useMediaQuery } from '@chakra-ui/react';

const NosotrosLanding = () => {
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
			<Flex
				w={isDesktop ? '70vw' : '100vw'}
				flexDir={isDesktop ? 'row' : 'column'}
				justifyContent={isDesktop ? 'space-evenly' : 'center'}
				alignItems='center'
			>
				<Flex
					flexDir='column'
					w={isDesktop ? '30vw' : '80vw'}
					justifyContent='center'
					alignItems='center'
					marginBottom={10}
					boxShadow='md'
				>
					<Avatar
						h={isDesktop ? '200px' : '90px'}
						w={isDesktop ? '200px' : '90px'}
						src='/assets/nico.jpg'
					/>
					<Flex
						bgColor='white'
						w='100%'
						h='160px'
						alignItems='center'
						justifyContent='center'
						borderRadius={10}
						marginTop='-45px'
					>
						<Heading
							fontSize={isDesktop ? '5xl' : '4xl'}
							fontFamily='fonts.primaria'
							color='color.gris'
						>
							Nico
						</Heading>
					</Flex>
				</Flex>
				<Flex
					flexDir='column'
					w={isDesktop ? '30vw' : '80vw'}
					justifyContent='center'
					alignItems='center'
					marginBottom={10}
					boxShadow='md'
				>
					<Avatar
						h={isDesktop ? '200px' : '90px'}
						w={isDesktop ? '200px' : '90px'}
						src='/assets/ro.jpg'
					/>
					<Flex
						bgColor='white'
						w='100%'
						h='160px'
						alignItems='center'
						justifyContent='center'
						borderRadius={10}
						marginTop='-45px'
					>
						<Heading
							fontSize={isDesktop ? '5xl' : '4xl'}
							fontFamily='fonts.primaria'
							color='color.gris'
						>
							Rocilda
						</Heading>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default NosotrosLanding;
