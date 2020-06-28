module.exports = {
	coveragePathIgnorePatterns: ['/node_modules/', '/.next/', '/public/'],
	setupFiles: ['./jest/jest.env.js'],
	setupFilesAfterEnv: ['./jest/jest.setup.js'],
	transform: {
		'^.+\\.jsx?$': './jest/transformer/custom-transformer.js',
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/jest/transformer/file-transformer.js"
	},
}
