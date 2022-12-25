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

	return (
		<>
			<Button
				leftIcon={<BsFillExclamationCircleFill />}
				size='md'
				color='color.gris'
				fontFamily='fonts.secundaria'
				boxShadow='md'
				marginBottom={3}
				justifyContent={'flex-start'}
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
							El mayor de nuestros deseos es que todos podamos disfrutas de este día al máximo y sin preocupaciones, por lo que tomamos la decisión que sea un evento <Text as='b'>sin niños.</Text>
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
							marginBottom={3}
						>
							El código de vestimenta es <Text as='b'>elegante sport.</Text>
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalDatita;
