module.exports = {
	content: ['./index.html',
		'./node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		extend: {
			colors: {
				'ps-blue': '#004B93'
			},
			height: {
				'128': '640px'
			},
		}
	},
	plugins: [require('tw-elements/dist/plugin')]
};
