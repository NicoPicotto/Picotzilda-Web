import React from 'react';
import { Flex, Button, Link, useMediaQuery } from '@chakra-ui/react';
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import {
	BsFillExclamationCircleFill,
	BsGeoAltFill,
	BsCreditCard2BackFill,
} from 'react-icons/bs';
import { GiLargeDress } from 'react-icons/gi';
import { FaCocktail } from 'react-icons/fa';
import ModalCuando from '../Components/Modales/ModalCuando';
import ModalDonde from '../Components/Modales/ModalDonde';

const Evento = () => {
	const [isMobile] = useMediaQuery('(max-width: 720px)');

	return (
		<Flex
			w='100vw'
			h='100vh'
			alignItems='center'
			justifyContent='center'
			bgColor='color.verde'
			overflow='hidden'
			flexDir='column'
		>
			<Flex
				marginTop={5}
				marginBottom={5}
				alignItems='flex-end'
				justifyContent='space-evenly'
				w={isMobile ? '80vw' : '550px'}
			>
				<Link to={'/'} as={ReachLink}>
					<Button
						leftIcon={<ChevronLeftIcon />}
						boxShadow='md'
						size='xs'
						color='color.bordo'
						fontFamily='fonts.secundaria'
					>
						Volver
					</Button>
				</Link>
				<Link to={'/evento'} as={ReachLink}>
					<Button
						rightIcon={<CheckIcon />}
						size='xs'
						color='color.bordo'
						fontFamily='fonts.secundaria'
						boxShadow='md'
					>
						Confirmar asistencia
					</Button>
				</Link>
			</Flex>
			<Flex
				w={isMobile ? '80vw' : '550px'}
				flexDir='column'
				h='100vh'
				justifyContent='center'
			>
				<ModalCuando />
				<ModalDonde />
				<Button
					leftIcon={<FaCocktail />}
					size='md'
					color='color.bordo'
					fontFamily='fonts.secundaria'
					boxShadow='md'
					marginBottom={3}
					justifyContent={'flex-start'}
				>
					¿Qué comemos y tomamos?
				</Button>
				<Button
					leftIcon={<GiLargeDress />}
					size='md'
					color='color.bordo'
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
					color='color.bordo'
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
					color='color.bordo'
					fontFamily='fonts.secundaria'
					boxShadow='md'
					justifyContent={'flex-start'}
					marginBottom={3}
				>
					Más datita importante
				</Button>
				<Button
					leftIcon={<CheckIcon />}
					size='md'
					color='white'
					bgColor={'color.bordo'}
					fontFamily='fonts.secundaria'
					boxShadow='md'
					justifyContent={'flex-start'}
				>
					Confirmar asistencia
				</Button>
			</Flex>
		</Flex>
	);
};

export default Evento;
