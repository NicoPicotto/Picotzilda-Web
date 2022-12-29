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
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	return (
		<Flex
			h='100vh'
			overflow='hidden'
			w="100%"
			flexDir='column'
			justifyContent={isDesktop ? 'center' : 'flex-start'}
			bgImage={isDesktop ? '/assets/CHP_17182.jpg' : '/assets/mobileevento.jpg'}
			bgSize='cover'
			bgPos={"bottom"}
			bgAttachment={isDesktop && 'fixed'}
		>
			<Flex
				padding={isDesktop ? 20 : 1}
				marginTop={isDesktop ? 0 : 5}
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				bgColor={isDesktop ? 'rgba(255, 255, 255, 0.3)' : 'none'}
				boxShadow={isDesktop ? '0 8px 32px 0 gray' : 'none'}
				w={isDesktop ? '40%' : '100%'}
				h={isDesktop ? '100%' : '40%'}
				backdropFilter={isDesktop ? 'blur(8px)' : 'none'}
				border={isDesktop ? '1px solid rgba(255, 255, 255, 0.2' : 'none'}
			>
				<ModalCuando />
				<ModalDonde />
				<ModalComida />
				<ModalPago />
				<ModalDatita />
				<Button
					leftIcon={<CheckIcon />}
					size={isDesktop ? "md" : "sm"}
					w={isDesktop ? '75%' : "60%"}
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
