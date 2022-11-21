import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Timer = ({ duration }) => {
	const [time, setTime] = useState(duration);

	useEffect(() => {
		setTimeout(() => {
			setTime(time - 1000);
		}, 1000);
	}, [time]);

	const getFormattedTime = (milliseconds) => {
		let totalSeconds = parseInt(Math.floor(time / 1000));
		let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
		let totalHours = parseInt(Math.floor(totalMinutes / 60));
		let days = parseInt(Math.floor(totalHours / 24));

		let seconds = parseInt(totalSeconds % 60);
		let minutes = parseInt(totalMinutes & 60);
		let hours = parseInt(totalHours % 24);

		return `${days} : ${hours} : ${minutes} : ${seconds}`;
	};

	return (
		<Flex>
			<Text fontSize='lg' fontFamily='fonts.secundaria'>
				{getFormattedTime(time)}
			</Text>
		</Flex>
	);
};

export default Timer;
