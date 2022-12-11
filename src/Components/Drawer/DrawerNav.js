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
				bgColor='color.cremita'
			>
				<HamburgerIcon color='color.gris' />
			</Button>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody alignItems='center' bgColor='color.gris'>
						<Heading fontSize='2xl' fontFamily='fonts.secundaria' color='white'>
							INICIO
						</Heading>
						<Heading fontSize='2xl' fontFamily='fonts.secundaria' color='white'>
							NOSOTROS
						</Heading>
						<Heading fontSize='2xl' fontFamily='fonts.secundaria' color='white'>
							EL EVENTO
						</Heading>
						<Heading fontSize='2xl' fontFamily='fonts.secundaria' color='white'>
							CONFIRMÁ TU ASISTENCIA
						</Heading>
						<Heading fontSize='2xl' fontFamily='fonts.secundaria' color='white'>
							MENSAJITOS
						</Heading>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default DrawerNav;
