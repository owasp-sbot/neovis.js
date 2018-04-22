module.exports = function () {
    return {
        files: [
            { pattern: 'vendor/neo4j-javascript-driver/**/*.js', instrument: false, load: true , ignore: false },
            { pattern: 'vendor/vis/dist/*.js'                  , instrument: false, load: true , ignore: false },
            'src/**/*.js'
        ],

        tests: [
            'test/**/*.coffee'
        ],
        compilers: {
        },
        env: {

            type: 'node',
            params: {
                runner: `-r ${require.resolve('esm')}`
            }
        }
    }
}
