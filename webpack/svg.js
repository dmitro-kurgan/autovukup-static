const SVGSpritemapPlugin = require('svg-sprite-loader');
// const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = function() {
	// return {
	// 	plugins: [
	//         new SVGSpritemapPlugin({
	//             src: 'source/components/images/*.svg',
	//             filename: 'source/components/images/spritemap.svg'
	//         })
	//     ]
	// }
	// return {
	// 	module: {
	// 		loaders: [
	// 			{
	// 				test: /\.svg/,
	// 				// define path to custom sprite module
	// 				loader: 'svg-sprite?spriteModule=' + 'source/components/js/server-side-rendering-sprite-module.js'
	// 			}
	// 		]
	// 	}
	// }


	return {
		module: {
		    rules: [
		      	{
			        test: /\.svg/,
			        // test: 'source/components/images/'  + /\.svg/,

			        loader: 'svg-sprite?spriteModule=' + 'source/components/js/server-side-rendering-sprite-module.js'
		      	}
		    ]
		}

	}
}


