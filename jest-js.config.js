// jest js测试相关配置

module.exports = {
  // "setupTestFrameworkScriptFile": "jest-enzyme",
  setupFilesAfterEnv: ['jest-enzyme'],
  testRegex: '/*(\\.)test\\.js$',
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // 识别less
    '^@/(.*)': '<rootDir>/app/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
}
