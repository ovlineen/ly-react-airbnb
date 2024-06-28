const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = pathName => path.resolve(__dirname, pathName);

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
		},
	],
	webpack: {
		alias: {
			"@": resolve("src"),
			components: resolve("src/components"),
			utils: resolve("src/utils"),
		},
	},
};
