/**
 * eslint配置
 * 使用eslint --init命令生成
 * 使用vscod下载 eslint插件，编辑时会自动检测语法。
 */
module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"parser": "babel-eslint",
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true,
			legacyDecorators: true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"jsx-a11y",
	],
	"rules": {
		"no-console": 0,
		"react/display-name": 0, //防止在React组件定义中丢失displayName
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