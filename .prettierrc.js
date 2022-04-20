const prettierConfigStandard = require('prettier-config-standard')
const merge = require('lodash.merge')

const modifiedConfig = merge({}, prettierConfigStandard, {
	singleQuote: true,
	useTabs: true,
	tabWidth: 4,
	semi: false,
	jsxSingleQuote: true,
	quoteProps: 'preserve'
})

module.exports = modifiedConfig
