import React from 'react';
import DrawerNav from '../Components/Drawer/DrawerNav';
import EventoLanding from '../Components/Evento/EventoLanding';
import HomeLanding from '../Components/Home/HomeLanding';
import NosotrosLanding from '../Components/NosotrosLanding/NosotrosLanding';

const Home = () => {
	return (
		<>
			{/* <DrawerNav /> */}
			<HomeLanding />
			<NosotrosLanding />
			<EventoLanding />
		</>
	);
};

export default Home;
