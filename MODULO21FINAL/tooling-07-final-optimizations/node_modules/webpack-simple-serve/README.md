# webpack-simple-serve

## Why

webpack-dev-server is slow.

## Differences with webpack-dev-server

- Use webpack's watch feature
- Don't put files in memory, write them to disk instead
- Use [serve](https://www.npmjs.com/package/serve) to serve the compiled static files

That's all.

## Installation

```
npm i webpack-simple-serve -D
```

## Usage

### With the CLI

In the directory where your webpack.config.js is, run:

```
node_modules/.bin/webpack-simple-serve
```

### With NPM Scripts

```
"scripts": {
  "dev": "webpack-simple-serve"
}
```

## Options

To get help for all options:

```
node_modules/.bin/webpack-simple-serve -h
```

## simpleDevServer options in webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  simpleDevServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000
  }
};
```
