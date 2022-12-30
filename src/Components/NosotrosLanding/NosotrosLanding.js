import React from 'react';
import { Heading, Flex, Text, useMediaQuery, Image } from '@chakra-ui/react';

const NosotrosLanding = () => {
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	return (
		<Flex
			h='100vh'
			overflow='hidden'
			w='100%'
			flexDir='column'
			alignItems='center'
			justifyContent='center'
			bgImage='/assets/fondo.jpg'
			bgSize='cover'
			bgPos='bottom'
			bgAttachment={isDesktop && 'fixed'}
		>
			<Flex flexDir='column' w='70%'>
				<Heading fontFamily="fonts.primaria" fontWeight="medium" textAlign="center">Sobre nosotrxs</Heading>
				<Image
					src='/assets/CHP_16711.jpg'
					filter='grayscale(100%)'
					marginBottom={4}
				/>
				<Text marginBottom={4} fontFamily="fonts.secundaria" color="color.gris" as="i" fontSize="sm" textAlign="center">
					Nos conocemos desde la secundaria, pero todo comenzó en 2018 con una
					pregunta tirada al aire “¿Si fueses completamente libre qué harias?”.
					Desde ese día los 80 km que nos separaban dejaron de existir entre
					nosotrxs gracias a largas conversaciones, discusiones y una cosa llevó
					a la otra...
				</Text>
				<Text fontFamily="fonts.secundaria" color="color.gris" as="i" fontSize="sm" textAlign="center">
					En 2020 la pandemia nos terminó de juntar en un solo
					lugar, uniendo dos caminos en uno solo para transitar la vida a la par
					y cada dia que nos miramos a los ojos vemos en el otro un amor que nos
					permite ser nosotrx mismxs.
				</Text>
			</Flex>
		</Flex>
	);
};

export default NosotrosLanding;
