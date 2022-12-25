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
import { BiDrink } from 'react-icons/bi';
import { FaCocktail } from 'react-icons/fa';

const ModalComida = () => {
	const OverlayOne = () => (
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);

	return (
		<>
			<Button
				leftIcon={<FaCocktail />}
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
				¿Qué comemos y tomamos?
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
						<BiDrink size={60} />
					</Flex>
					<ModalBody padding={5}>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
							textAlign='center'
							marginBottom={3}
						>
							Luego del civil habrá una recepción con comidita rica para picar acompañada de bebidas espirituosas.
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
							Más tarde pasaremos al salón donde se servirán los platos
							principales. Las opciones son:
						</Text>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
							textAlign='center'
						>
							• Strudel de hongos
						</Text>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
							textAlign='center'
							marginBottom={3}
						>
							• Bife de chorizo
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
							De postre se servirá *sarasa* de maracuyá.
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
							A mitad de fiesta, para matar el bajón, vamos a disfrutar de los clásicos choris, pizza
							y papas fritas.
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalComida;
