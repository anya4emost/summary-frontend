const path = require('path');

console.log('process.env', process.env);
console.log('process.argv', process.argv);

//console.log('process.cwd()', process.cwd());

console.log('__dirname', __dirname);

console.log(' path.resolve(__dirname, \'dist\'),',  path.resolve(__dirname, 'dist'));

console.log(' path.resolve(__dirname, \'../../dist\'),',  path.resolve(__dirname, '../../dist'));