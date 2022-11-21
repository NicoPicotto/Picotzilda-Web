import { extendTheme } from '@chakra-ui/react';
import '@fontsource/rozha-one';
import '@fontsource/quicksand';

const colors = {
	color: {
		gris: '#36384C',
		bordo: '#613A43',
		verde: '#849974',
		rosita: '#E3BAB3',
		cremita: '#E9DCCD',
	},
};

const fonts = {
	fonts: {
		primaria: `'Rozha One', regular !important`,
		secundaria: `'Quicksand', sans-serif !important`,
	},
};

const theme = extendTheme({ colors, fonts });

export default theme;
