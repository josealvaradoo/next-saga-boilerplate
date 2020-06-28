const { transform } = require('@babel/core')
const envPreset = require('@babel/preset-env')
const reactPreset = require('@babel/preset-react')

module.exports = {
	process(src, filename) {
		const result = transform(src, {
			filename,
			presets: [envPreset, reactPreset]
		})

		return result ? result.code : src
	}
}
