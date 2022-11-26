import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/quicksand';
import '@fontsource/rozha-one';
import theme from './styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Nosotros from './views/Nosotros';
import Evento from './views/Evento';
import Formulario from './views/Formulario';
import './App.css';
import Mensajes from './views/Mensajes';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/nosotros' element={<Nosotros />} />
					<Route path='/evento' element={<Evento />} />
					<Route path='/confirma' element={<Formulario />} />
					<Route path='/mensajes' element={<Mensajes />} />
				</Routes>
			</Router>
		</ChakraProvider>
	);
};

export default App;
