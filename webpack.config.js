const path = require('path');

module.exports =
{
    mode: 'development',
    entry:
    {
        index: './src/index.js',
        objects:'./src/objects.js',
        domhandler:'./src/domhandler.js',
        generalFunctions:'./src/generalFunctions.js'

    },
    output:
    {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
    },
};