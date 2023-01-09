/* eslint-disable quote-props */
const path = require('path');




module.exports = {
    entry: './src/Utility/app.js',
    output: {
        filename: 'app.js', 
        path: path.resolve(__dirname, 'assets', 'scripts')
    }
};