import React, { useState } from 'react';
import {
	ModalOverlay,
	Button,
	ModalBody,
	ModalContent,
	Divider,
	Modal,
	useDisclosure,
	Text,
	Flex,
	useMediaQuery,
} from '@chakra-ui/react';
import {
	BsFillExclamationCircleFill,
	BsExclamationCircle,
} from 'react-icons/bs';

const ModalDatita = () => {
	const OverlayOne = () => (
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	return (
		<>
			<Button
				leftIcon={<BsFillExclamationCircleFill />}
				size={isDesktop ? 'md' : 'sm'}
				w={isDesktop ? '75%' : '60%'}
				bgColor='rgba(255, 255, 255, 0.4)'
				_hover={{ bg: 'rgba(255, 255, 255, 0.6)' }}
				color='color.gris'
				fontFamily='fonts.secundaria'
				marginBottom={3}
				justifyContent={'center'}
				onClick={() => {
					setOverlay(<OverlayOne />);
					onOpen();
				}}
			>
				Más datita importante
			</Button>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent
					w='80%'
					overflow='hidden'
					justifyContent='center'
					alignItems='center'
				>
					<Flex
						fontFamily='fonts.secundaria'
						bgColor='color.gris'
						color='white'
						w='100%'
						padding={5}
						justifyContent='center'
					>
						<BsExclamationCircle size={60} />
					</Flex>
					<ModalBody padding={5}>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
							textAlign='center'
							marginBottom={3}
						>
							El mayor de nuestros deseos es que todos podamos disfrutar de este
							día al máximo y sin preocupaciones, por lo que tomamos la decisión
							que sea un evento <Text as='b'>sólo para adultos</Text> (sin
							niños).
						</Text>
						<Flex justifyContent='center'>
							<Divider
								borderColor='color.gris'
								opacity={0.3}
								marginBottom={3}
								w='50%'
							/>
						</Flex>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
							textAlign='center'
						>
							Si bien el código de vestimenta es{' '}
							<Text as='b'>elegante sport</Text>, no tengas miedo de llevar
							calzado cómodo para tirar los prohibidos.
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalDatita;
