import React from 'react';
import {
	Button,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerBody,
	Heading,
	useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const DrawerNav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState('top');

	return (
		<>
			<Button
				onClick={onOpen}
				position='fixed'
				margin={3}
				bgColor='transparent'
			>
				<HamburgerIcon color='color.gris' />
			</Button>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody alignItems='center'>
						<Heading fontFamily='fonts.secundaria'>INICIO</Heading>
						<Heading fontFamily='fonts.secundaria'>NOSOTROS</Heading>
						<Heading fontFamily='fonts.secundaria'>EL EVENTO</Heading>
						<Heading fontFamily='fonts.secundaria'>
							CONFIRMÁ TU ASISTENCIA
						</Heading>
						<Heading fontFamily='fonts.secundaria'>MENSAJITOS</Heading>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default DrawerNav;
