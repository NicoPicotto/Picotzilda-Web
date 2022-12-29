import React from 'react';
import EventoLanding from '../Components/Evento/EventoLanding';
import Extras from '../Components/Extras/Extras';
import HomeLanding from '../Components/Home/HomeLanding';
import NosotrosLanding from '../Components/NosotrosLanding/NosotrosLanding';

const Home = () => {
	return (
		<>
			<HomeLanding />
			<NosotrosLanding />
			<EventoLanding />
			<Extras />
		</>
	);
};

export default Home;
