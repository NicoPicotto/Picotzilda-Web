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
					<DrawerBody alignItems='center' bgColor='color.gris' padding={5}>
						<Button
							href='#inicio'
							fontSize='2xl'
							fontFamily='fonts.secundaria'
							color='white'
							textAlign='center'
							padding={2}
						>
							INICIO
						</Button>
						<Heading
							fontSize='2xl'
							fontFamily='fonts.secundaria'
							color='white'
							textAlign='center'
							padding={2}
						>
							NOSOTROS
						</Heading>
						<Heading
							fontSize='2xl'
							fontFamily='fonts.secundaria'
							color='white'
							textAlign='center'
							padding={2}
						>
							EL EVENTO
						</Heading>
						<Heading
							fontSize='2xl'
							fontFamily='fonts.secundaria'
							color='white'
							textAlign='center'
							padding={2}
						>
							CONFIRMÁ TU ASISTENCIA
						</Heading>
						<Heading
							fontSize='2xl'
							fontFamily='fonts.secundaria'
							color='white'
							textAlign='center'
							padding={2}
						>
							MENSAJITOS
						</Heading>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default DrawerNav;
