const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');


process.chdir(path.join(__dirname, 'template'));
const buildConfig = require('../../lib/webpack.prod.js');

const mocha = new Mocha({
  timeout: '10000ms',
});
console.log(process.cwd())
rimraf('./dist', () => {
  const prodConfig = buildConfig;
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }));
    console.log('\n Compiler sucess, begin mocha test');

    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));

    mocha.run();
  });
});
