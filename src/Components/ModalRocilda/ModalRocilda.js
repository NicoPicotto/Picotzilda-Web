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
import { InfoIcon } from '@chakra-ui/icons';

const ModalRocilda = () => {
	const OverlayOne = () => (
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);

	return (
		<>
			<Button
				rightIcon={<InfoIcon />}
				onClick={() => {
					setOverlay(<OverlayOne />);
					onOpen();
				}}
				variant='link'
				fontSize='md'
			>
				Ver más
			</Button>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent w='75%'>
					<ModalHeader fontFamily='fonts.secundaria'>Rocío Zabala</ModalHeader>
					<ModalCloseButton />
					<ModalBody marginBottom={5}>
						<Text>Info de rocilda</Text>
						<Text>Info de rocilda</Text>
						<Text>Info de rocilda</Text>
						<Text>Info de rocilda</Text>
						<Text>Info de rocilda</Text>
						<Text>Info de rocilda</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalRocilda;
