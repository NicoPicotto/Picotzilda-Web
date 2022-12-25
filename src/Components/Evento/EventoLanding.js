import React from 'react';
import { Flex, Button, Link, useMediaQuery } from '@chakra-ui/react';
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import {
	BsFillExclamationCircleFill,
	BsCreditCard2BackFill,
} from 'react-icons/bs';
import { GiLargeDress } from 'react-icons/gi';
import ModalCuando from '../Modales/ModalCuando';
import ModalDonde from '../Modales/ModalDonde';
import ModalComida from '../Modales/ModalComida';

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
				<Button
					leftIcon={<GiLargeDress />}
					size='md'
					color='color.gris'
					fontFamily='fonts.secundaria'
					boxShadow='md'
					marginBottom={3}
					justifyContent={'flex-start'}
				>
					¿Qué me pongo?
				</Button>
				<Button
					leftIcon={<BsCreditCard2BackFill />}
					size='md'
					color='color.gris'
					fontFamily='fonts.secundaria'
					boxShadow='md'
					marginBottom={3}
					justifyContent={'flex-start'}
				>
					¿Cuánto duele?
				</Button>
				<Button
					leftIcon={<BsFillExclamationCircleFill />}
					size='md'
					color='color.gris'
					fontFamily='fonts.secundaria'
					boxShadow='md'
					justifyContent='flex-start'
					marginBottom={3}
				>
					Más datita importante
				</Button>
				<Button
					leftIcon={<CheckIcon />}
					size='md'
					color='white'
					bgColor='color.verde'
					fontFamily='fonts.secundaria'
					boxShadow='md'
					justifyContent='flex-start'
				>
					Confirmar asistencia
				</Button>
			</Flex>
		</Flex>
	);
};

export default EventoLanding;
