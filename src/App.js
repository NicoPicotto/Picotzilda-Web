import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/quicksand';
import '@fontsource/rozha-one';
import theme from './styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</ChakraProvider>
	);
};

export default App;
