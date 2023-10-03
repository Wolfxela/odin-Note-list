const path = require('path');

module.exports =
{
    mode: 'development',
    entry:
    {
        initial:'./src/initial.js',
        domhandler:'./src/domhandler.js',
        index: './src/index.js',
        objects:'./src/objects.js',
        generalFunctions:'./src/generalFunctions.js',
        

    },
    output:
    {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
    },
};