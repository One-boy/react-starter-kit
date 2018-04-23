/**
 * eslint配置
 * 使用eslint --init命令生成
 */
module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"parser": "babel-eslint",
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"jsx-a11y",
	],
	"rules": {
		"indent": [
			"error",
			2,
			{
				"SwitchCase": 1
			}
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"never"
		]
	}
};