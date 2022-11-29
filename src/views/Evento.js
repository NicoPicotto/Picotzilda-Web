import React from 'react';
import { Flex, Button, Link, useMediaQuery } from '@chakra-ui/react';
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import {
	BsFillExclamationCircleFill,
	BsFillChatFill,
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
			bgColor='color.gris'
			overflow='hidden'
			flexDir='column'
		>
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
					color='color.gris'
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
				<Link to={'/mensajes'} as={ReachLink}>
					<Button
						leftIcon={<BsFillChatFill />}
						w='100%'
						size='md'
						color='color.gris'
						fontFamily='fonts.secundaria'
						boxShadow='md'
						justifyContent='flex-start'
						marginBottom={3}
					>
						Quiero dejar un mensaje
					</Button>
				</Link>
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
				<Flex justifyContent='center' marginTop={5}>
					<Link to={'/'} as={ReachLink}>
						<Button
							leftIcon={<ChevronLeftIcon />}
							size='sm'
							color='color.gris'
							fontFamily='fonts.secundaria'
							boxShadow='md'
						>
							Volver
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Evento;
