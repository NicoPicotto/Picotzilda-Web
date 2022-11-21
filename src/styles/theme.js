import { extendTheme } from '@chakra-ui/react';

const colors = {
	color: {
		primario: '#3182CE',
		secundario: '#2F855A',
		terciario: '#A0AEC0',
	},
};

// const fonts = {
// 	fonts: {
// 		open: `'Open Sans', sans-serif`,
// 		raleway: `'Raleway', sans-serif`,
// 	},
// };

const theme = extendTheme({ colors });

export default theme;
