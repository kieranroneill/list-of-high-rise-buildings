module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!<rootDir>/src/**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
        },
    },
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx'
    ],
    rootDir: '..',
    roots: ['<rootDir>/src/'],
    setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],
    testEnvironment: 'node',
    testMatch: [
        '<rootDir>/src/**/?(*.)(test).(j|t)s?(x)'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    verbose: true
};
