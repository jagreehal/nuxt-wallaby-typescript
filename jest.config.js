module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~/(.*)$': '<rootDir>/src/$1'
    },
    moduleFileExtensions: ['js', 'vue', 'ts', 'json'],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        ".*\\.(vue)$": "vue-jest"
    }
}