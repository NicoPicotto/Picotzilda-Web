import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Nosotros from './views/Nosotros';
import Evento from './views/Evento';
import Formulario from './views/Formulario';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/nosotros' element={<Nosotros />} />
					<Route path='/evento' element={<Evento />} />
					<Route path='/confirma' element={<Formulario />} />
				</Routes>
			</Router>
		</ChakraProvider>
	);
};

export default App;
