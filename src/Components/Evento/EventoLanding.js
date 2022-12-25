import React from 'react';
import { Flex, Button, Link, useMediaQuery } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import ModalCuando from '../Modales/ModalCuando';
import ModalDonde from '../Modales/ModalDonde';
import ModalComida from '../Modales/ModalComida';
import ModalPago from '../Modales/ModalPago';
import ModalDatita from '../Modales/ModalDatita';
import {BsChatDotsFill} from "react-icons/bs"

const EventoLanding = () => {
	const [isMobile] = useMediaQuery('(max-width: 720px)');

	return (
		<Flex
			h='100vh'
			alignItems='center'
			overflow='hidden'
			flexDir='column'
			justifyContent='center'
			bgColor='#F8F9F0'
		>
			<Flex
				w={isMobile ? '80vw' : '550px'}
				flexDir='column'
				h='100vh'
				justifyContent='center'
			>
				<ModalCuando />
				<ModalDonde />
				<ModalComida />
				<ModalPago />
				<ModalDatita />
				<Button
					leftIcon={<CheckIcon />}
					size='md'
					color='white'
					bgColor='color.verde'
					fontFamily='fonts.secundaria'
					boxShadow='md'
					marginBottom={3}
					justifyContent='flex-start'
				>
					Confirmar asistencia
				</Button>
				<ReachLink to='/mensajitos'>
					<Button
						w='100%'
						leftIcon={<BsChatDotsFill />}
						size='md'
						color='color.gris'
						fontFamily='fonts.secundaria'
						boxShadow='md'
						justifyContent={'flex-start'}
					>
						Dejanos un mensajito
					</Button>
				</ReachLink>
			</Flex>
		</Flex>
	);
};

export default EventoLanding;
