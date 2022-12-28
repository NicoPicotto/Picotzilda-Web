import React from 'react';
import { Flex, Button, Link, useMediaQuery } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import ModalCuando from '../Modales/ModalCuando';
import ModalDonde from '../Modales/ModalDonde';
import ModalComida from '../Modales/ModalComida';
import ModalPago from '../Modales/ModalPago';
import ModalDatita from '../Modales/ModalDatita';
import { BsChatDotsFill } from 'react-icons/bs';

const EventoLanding = () => {
	const [isMobile] = useMediaQuery('(max-width: 720px)');

	return (
		<Flex
			h='100vh'
			overflow='hidden'
			flexDir='column'
			justifyContent={isMobile ? 'flex-start' : 'center'}
			bgImage={isMobile ? '/assets/CHP_1756.jpg' : '/assets/CHP_17182.jpg'}
			bgSize='cover'
			bgPos={isMobile ? '50% 100%' : '100% 100%'}
			bgAttachment='fixed'
		>
			<Flex
				padding={isMobile ? 1 : 20}
				marginTop={isMobile && 5}
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				bgColor={isMobile ? 'none' : 'rgba(255, 255, 255, 0.3)'}
				boxShadow={isMobile ? 'none' : '0 8px 32px 0 gray'}
				w={isMobile ? '100%' : '40%'}
				h={isMobile ? '40%' : '100%'}
				backdropFilter={isMobile ? 'none' : 'blur(8px)'}
				border={isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.2'}
			>
				<ModalCuando />
				<ModalDonde />
				<ModalComida />
				<ModalPago />
				<ModalDatita />
				<Button
					leftIcon={<CheckIcon />}
					w='75%'
					as='a'
					bgColor='rgba(132, 153, 116, 0.7)'
					_hover={{ bg: 'rgba(132, 153, 116)' }}
					color='white'
					target='_blank'
					href='https://docs.google.com/forms/d/e/1FAIpQLSdtWeon9UIZNB_4qmJjkTcszZQ66iPSmjNUBOcvkp4hq0XSgw/viewform?usp=sf_link'
					fontFamily='fonts.secundaria'
					marginBottom={3}
					justifyContent={'center'}
				>
					Confirmar asistencia
				</Button>
				{/* <ReachLink to='/mensajitos'>
					<Button
						leftIcon={<BsChatDotsFill />}
						w="75%"
						color='color.gris'
						fontFamily='fonts.secundaria'
						boxShadow='md'
						justifyContent={'flex-start'}
					>
						Dejanos un mensajito
					</Button>
				</ReachLink> */}
			</Flex>
		</Flex>
	);
};

export default EventoLanding;
