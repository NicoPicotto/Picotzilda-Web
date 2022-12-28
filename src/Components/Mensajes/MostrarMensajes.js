import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { Flex, Spinner, useMediaQuery } from '@chakra-ui/react';
import Mensaje from './Mensaje';

const MostrarMensajes = () => {
	const [mensajitos, setMensajitos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	useEffect(() => {
		setLoading(true);
		const q = query(
			collection(db, 'mensajes-casorio'),
			orderBy('fecha', 'desc')
		);
		const unsub = onSnapshot(q, (querySnapshot) => {
			let mjesArray = [];
			querySnapshot.forEach((doc) => {
				mjesArray.push({ ...doc.data(), id: doc.id });
			});
			setMensajitos(mjesArray);
			setLoading(false);
		});

		return () => unsub();
	}, []);

	return (
		<Flex
			flexDir='column'
			alignItems='center'
			padding={5}
			overflowY='scroll'
			w={isDesktop ? '720px' : '100vw'}
		>
			<Flex flexDir='column'>
				{mensajitos.map((mensaje) => (
					<Mensaje
						key={mensaje.id}
						nombre={mensaje.nombre}
						mensaje={mensaje.mensaje}
						fecha={mensaje.fecha}
					/>
				))}
				{loading && <Spinner margin={5} color='color.cremita' />}
			</Flex>
		</Flex>
	);
};

export default MostrarMensajes;
