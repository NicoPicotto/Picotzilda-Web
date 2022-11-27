import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Flex, Input, Textarea, Button } from '@chakra-ui/react';

const EscribirMensaje = () => {
	const [nombre, setNombre] = useState('');
	const [mensaje, setMensaje] = useState('');

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
			w='100vw'
			bgColor='color.bordo'
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
				w='70vw'
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
				w='70vw'
			/>
			<Button
				bgColor='color.cremita'
				color='color.bordo'
				type='submit'
				fontFamily='fonts.secundaria'
				w='70vw'
				size='sm'
				borderRadius={5}
				_focus={{ bgColor: 'color.cremita' }}
				_after={{ bgColor: 'color.cremita' }}
			>
				¡Añadir mensajito!
			</Button>
		</Flex>
	);
};

export default EscribirMensaje;
