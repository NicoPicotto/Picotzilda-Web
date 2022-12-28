import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Flex, Input, Textarea, Button, useMediaQuery } from '@chakra-ui/react';

const EscribirMensaje = () => {
	const [nombre, setNombre] = useState('');
	const [mensaje, setMensaje] = useState('');
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (mensaje !== '') {
			await addDoc(collection(db, 'mensajes-casorio'), {
				nombre,
				mensaje,
				fecha: serverTimestamp(),
			});
			setNombre('');
			setMensaje('');
		}
	};

	return (
		<Flex
			as='form'
			onSubmit={handleSubmit}
			flexDir='column'
			w={isDesktop ? '550px' : '80vw'}
			alignItems='center'
			justifyContent='center'
			borderBottomWidth={1}
			marginTop={5}
			paddingBottom={5}
			borderBottomColor='color.cremita'
		>
			<Input
				placeholder='Nombre'
				size='sm'
				borderRadius={5}
				type='text'
				value={nombre}
				onChange={(e) => setNombre(e.target.value)}
				marginBottom={2}
				bgColor='white'
				fontFamily='fonts.secundaria'
				w={isDesktop ? '550px' : '80vw'}
			/>
			<Textarea
				placeholder='Mensaje'
				type='text'
				size='sm'
				borderRadius={5}
				value={mensaje}
				onChange={(e) => setMensaje(e.target.value)}
				marginBottom={2}
				bgColor='white'
				fontFamily='fonts.secundaria'
				w={isDesktop ? '550px' : '80vw'}
			/>
			<Button
				bgColor='white'
				color='color.gris'
				type='submit'
				fontFamily='fonts.secundaria'
				w={isDesktop ? '550px' : '80vw'}
				size='sm'
				borderRadius={5}
				_focus={{ bgColor: 'white' }}
				_after={{ bgColor: 'white' }}
			>
				¡Añadir mensajito!
			</Button>
		</Flex>
	);
};

export default EscribirMensaje;
