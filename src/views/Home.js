import React from 'react';
import EventoLanding from '../Components/Evento/EventoLanding';
import HomeLanding from '../Components/Home/HomeLanding';
import NosotrosLanding from '../Components/NosotrosLanding/NosotrosLanding';

const Home = () => {
	return (
		<>
			<HomeLanding />
			<NosotrosLanding />
			<EventoLanding />
		</>
	);
};

export default Home;
