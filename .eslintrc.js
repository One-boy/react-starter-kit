/**
 * eslint配置
 * 使用eslint --init命令生成
 * 使用vscod下载 eslint插件，编辑时会自动检测语法。
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 使用babel开发的解析器
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      legacyDecorators: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    // 防止在React组件定义中丢失displayName
    'react/display-name': 0,
    // prettier 标记的地方抛出错误信息
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}
