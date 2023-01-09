#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const webpack = require('webpack');

const handler = require('serve-handler');
const http = require('http');

const cwd = process.cwd();

program.option(
  '-c, --config <path>',
  'webpack config file path, defaults to ./webpack.config.js',
  './webpack.config.js'
);

program.parse(process.argv);

const configPath = path.join(cwd, program.config);

if (!fs.existsSync(configPath)) {
  throw new Error('webpack config is required');
}

const webpackConfig = require(configPath);
const simpleDevServer = webpackConfig.simpleDevServer;
delete webpackConfig.simpleDevServer;

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: (simpleDevServer && simpleDevServer.contentBase) || cwd
  });
});

const port = (simpleDevServer && simpleDevServer.port) || 8080;

server.listen(port, () => {
  console.log('Webpack Simple Serve Running at http://localhost:' + port);
});

const compiler = webpack(webpackConfig);

const watching = compiler.watch(
  webpackConfig.watchOptions || {
    aggregateTimeout: 300,
    poll: undefined
  },
  (err, stats) => {
    // Print watch/build result here...
    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true // Shows colors in the console
      })
    );
  }
);
