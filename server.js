const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


//initial server configuration

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack('config');

app.use(
    webpackDevMiddleware(
        compiler,
        {
            publicPath: config.output.publicPath,
        })
    );

// Serve on port 3000.
app.listen(3000, function () {
    console.log('Port 3000 is Served');
  });