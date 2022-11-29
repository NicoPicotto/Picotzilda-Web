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
				<ModalContent
					w='80%'
					overflow='hidden'
					justifyContent='center'
					alignItems='center'
				>
					<Flex
						fontFamily='fonts.secundaria'
						bgColor='color.bordo'
						color='color.cremita'
						w='100%'
						padding={5}
						justifyContent='center'
					>
						<BsGeoAltFill size={50} />
					</Flex>
					<ModalBody padding={5}>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
							textAlign='center'
							marginBottom={3}
						>
							Las Cortaderas Club de Campo
						</Text>
						<Flex justifyContent='center'>
							<Divider borderColor='color.bordo' marginBottom={3} w='50%' />
						</Flex>
						<Text
							fontFamily='fonts.secundaria'
							fontSize='sm'
							color='color.gris'
							textAlign='center'
							marginBottom={3}
						>
							Entre General Deheza y General Cabrera
						</Text>
						<Flex borderRadius={10} overflow='hidden' boxShadow='md'>
							<iframe
								id='gmap_canvas'
								src='https://maps.google.com/maps?q=Las%20Cortaderas&t=&z=15&ie=UTF8&iwloc=&output=embed'
								frameborder='0'
								scrolling='no'
								marginheight='0'
								marginwidth='0'
							></iframe>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalDonde;
