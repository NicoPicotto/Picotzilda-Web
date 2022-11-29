import React, { useState } from 'react';
import {
	ModalOverlay,
	Button,
	ModalBody,
	ModalContent,
	ModalCloseButton,
	Modal,
	useDisclosure,
	ModalHeader,
	Text,
} from '@chakra-ui/react';
import { BsCalendar2EventFill } from 'react-icons/bs';

const ModalCuando = () => {
	const OverlayOne = () => (
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);

	return (
		<>
			<Button
				leftIcon={<BsCalendar2EventFill />}
				size='md'
				color='color.bordo'
				fontFamily='fonts.secundaria'
				boxShadow='md'
				marginTop={-10}
				marginBottom={3}
				justifyContent={'flex-start'}
				onClick={() => {
					setOverlay(<OverlayOne />);
					onOpen();
				}}
			>
				¿Cuándo?
			</Button>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent w='80%'>
					<ModalHeader
						fontFamily='fonts.secundaria'
						fontWeight='black'
						color='color.bordo'
					>
						¿Cuándo?
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody marginBottom={3}>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
						>
							• Sábado 11 de Febrero del 2023
						</Text>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
						>
							• 18:30 hs - Llegada
						</Text>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
						>
							• 19:00 hs - Civil
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalCuando;
