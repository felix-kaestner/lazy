/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require('./package.json')

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  globals: {
    __DEV__: true,
    __TEST__: true,
    __VERSION__: pkg.version,
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
}
