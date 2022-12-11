import React, { useState, useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const Timer = ({ deadline }) => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const getTimeUntil = (deadline) => {
		const time = Date.parse(deadline) - Date.parse(new Date());
		setSeconds(Math.floor((time / 1000) % 60));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
	};

	useEffect(() => {
		getTimeUntil(deadline);
	});

	useEffect(() => {
		setInterval(() => getTimeUntil(deadline), 1000);
	}, [deadline]);

	const leading0 = (num) => {
		return num < 10 ? '0' + num : num;
	};

	return (
		<Flex>
			<Heading
				fontFamily='fonts.secundaria'
				fontWeight='medium'
				fontSize='xl'
				color='color.gris'
				padding={3}
				lineHeight={1}
			>
				{leading0(days)} : {leading0(hours)} : {leading0(minutes)} :{' '}
				{leading0(seconds)}
			</Heading>
		</Flex>
	);
};

export default Timer;
