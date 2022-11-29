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
	Flex,
	AspectRatio,
} from '@chakra-ui/react';
import { BsGeoAltFill } from 'react-icons/bs';

const ModalDonde = () => {
	const OverlayOne = () => (
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);

	return (
		<>
			<Button
				leftIcon={<BsGeoAltFill />}
				size='md'
				color='color.bordo'
				fontFamily='fonts.secundaria'
				boxShadow='md'
				marginBottom={3}
				justifyContent={'flex-start'}
				onClick={() => {
					setOverlay(<OverlayOne />);
					onOpen();
				}}
			>
				¿Dónde?
			</Button>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent w='80%'>
					<ModalHeader
						fontFamily='fonts.secundaria'
						fontWeight='black'
						color='color.bordo'
					>
						¿Dónde?
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody marginBottom={3}>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
						>
							• Las Cortaderas (Entre General Cabrera y General Deheza)
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalDonde;
