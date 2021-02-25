module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/functions.ts",
    "**/nameApiService.ts",
    "**/quiz.ts",
    "**/task4.ts",
  ],
};
