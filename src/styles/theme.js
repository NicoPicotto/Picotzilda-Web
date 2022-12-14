import { extendTheme } from '@chakra-ui/react';
import '@fontsource/rozha-one';
import '@fontsource/quicksand';

const colors = {
	color: {
		gris: '#111212',
		bordo: '#613A43',
		verde: '#849974',
		rosita: '#E3BAB3',
		cremita: '#F8F9F0',
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
