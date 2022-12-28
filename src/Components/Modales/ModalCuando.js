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
} from '@chakra-ui/react';
import { BsCalendar2Event, BsFillCalendarEventFill } from 'react-icons/bs';

const ModalCuando = () => {
	const OverlayOne = () => (
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);

	return (
		<>
			<Button
				leftIcon={<BsFillCalendarEventFill />}
				w="75%"
				bgColor="rgba(255, 255, 255, 0.4)"
				_hover={{bg: "rgba(255, 255, 255, 0.6)"}}
				color='color.gris'
				fontFamily='fonts.secundaria'
				marginBottom={3}
				justifyContent={'center'}
				onClick={() => {
					setOverlay(<OverlayOne />);
					onOpen();
				}}
			>
				¿Cuándo?
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
						<BsCalendar2Event size={50} />
					</Flex>
					<ModalBody padding={5}>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
							textAlign='center'
							marginBottom={3}
						>
							Sábado 11 de Febrero del 2023.
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
							marginBottom={3}
							textAlign='center'
						>
							18:30 hs - Llegada.
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
							19:00 hs - Civil.
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalCuando;
