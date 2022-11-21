import { extendTheme } from '@chakra-ui/react';

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
		primaria: `'Rozha One', regular`,
	},
};

const theme = extendTheme({ colors, fonts });

export default theme;
