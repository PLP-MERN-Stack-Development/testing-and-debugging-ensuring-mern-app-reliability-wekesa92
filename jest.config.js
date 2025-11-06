// jest.config.js
module.exports = {
  testEnvironment: "jsdom", // for React components
  moduleFileExtensions: ["js", "jsx", "json"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "client/src/**/*.{js,jsx}",
    "server/src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/*.config.js"
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
