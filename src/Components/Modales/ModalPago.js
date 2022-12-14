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
import { BsCreditCard2BackFill, BsCreditCard2Back } from 'react-icons/bs';
import { CopyIcon } from '@chakra-ui/icons';

const ModalPago = () => {
	const OverlayOne = () => (
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);
	const [copiado, setCopiado] = useState(false);
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	const copiarAlias = () => {
		navigator.clipboard.writeText('NICOPICOTTO.UALA');
		setCopiado(true);
	};

	return (
		<>
			<Button
				leftIcon={<BsCreditCard2BackFill />}
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
				¿Cuánto sale la jodita?
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
						<BsCreditCard2Back size={60} />
					</Flex>
					<ModalBody padding={5}>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
							textAlign='center'
							marginBottom={3}
						>
							El costo de la tarjeta es de <Text as='b'>$8.500</Text> por
							persona.
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
							Podés transferir al alias: <Text as='b'>NICOPICOTTO.UALA</Text>
						</Text>
						<Flex justifyContent='center'>
							<Button
								leftIcon={<CopyIcon />}
								size='sm'
								onClick={copiarAlias}
								marginBottom={3}
							>
								Copiar alias
							</Button>
						</Flex>
						{copiado && (
							<Text
								fontFamily='fonts.secundaria'
								fontSize='sm'
								color='color.gris'
								textAlign='center'
								marginBottom={3}
							>
								¡Copiado!
							</Text>
						)}
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
							Tené en cuenta que tenés hasta el{' '}
							<Text as='b'>Viernes 13 de enero</Text> para confirmar tu
							asistencia.
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalPago;
