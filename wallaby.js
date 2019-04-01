module.exports = wallaby => {

    const compiler = wallaby.compilers.babel({
        presets: ['@nuxt/babel-preset-app']
    })
    return {
        files: [
            '!src/**/*.spec.ts',
            '!src/**/*.stories.(ts|tsx)',
            'src/**/*',
            'jest.config.js',
            'package.json',
            'tsconfig.json'
        ],
        tests: ['src/**/*.spec.ts'],

        compilers: {
            '**/*.ts?(x)': wallaby.compilers.typeScript({}),
            '**/*.vue': require('wallaby-vue-compiler')(compiler)
        },

        env: {
            type: 'node',
            runner: 'node',
        },
        setup(wallaby) {
            const jestConfig = require('./package').jest || require('./jest.config')
            jestConfig.transform = {}
            wallaby.testFramework.configure(jestConfig)
        },

        testFramework: 'jest',
    }
}