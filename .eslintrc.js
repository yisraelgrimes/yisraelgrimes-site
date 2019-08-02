module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: "eslint:recommended",
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
			classes: true
		},
		sourceType: "module"
	},
	plugins: ["react", "json"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/jsx-uses-vars": 1,
		"eol-last": ["error", "always"]
	}
};
