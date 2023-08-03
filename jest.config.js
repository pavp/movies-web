module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'DEPRECATED', '.story.', '/__mocks__/', '.schema.ts'],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  coverageReporters: ['lcov', 'text', 'text-summary'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'DEPRECATED', '.story.', '/__mocks__/', '.schema.ts'],
  transformIgnorePatterns: ['node_modules/?!'],
  setupFiles: ['<rootDir>/test/jestSetupFile.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>/src', '<rootDir>'],
}
