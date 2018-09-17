const pkg = require('./package.json');

module.exports = {
  displayName: pkg.name,
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  moduleNameMapper: {
    '\\$root/(.*)': '<rootDir>/src/$1.js',
  },
};
