/*!
 * Mithril.Elements Starter Kit | https://github.com/philtoms/mithril-starter-kit
 * Copyright (c) Phil Toms, LLC. All rights reserved. See LICENSE.txt
 */

'use strict';

var webpack = require('webpack');

/**
 * Get configuration for Webpack
 *
 * @see http://webpack.github.io/docs/configuration
 *      https://github.com/petehunt/webpack-howto
 *
 * @param {boolean} release True if configuration is intended to be used in
 * a release mode, false otherwise
 * @return {object} Webpack configuration
 */
module.exports = function(release, watch) {
  return {
    cache: !release,
    debug: !release,
    devtool: 'eval',
    watch: watch,

    output: {
      filename: 'bundle.js'
    },

    stats: {
      colors: true,
      reasons: !release
    },

    plugins: release ? [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ] : [],

    resolve: {
      modulesDirectories: [
        'node_modules',
        'bower_components'
      ],
      alias: {
        mithril: '../node_modules/mithril/mithril.min.js',
        //   "mithril.elements": "../node_modules/mithril.elements/mithril.elements.js"
      },
      extensions: ['', '.web.coffee', '.webpack.coffee', '.coffee', '.webpack.js', '.web.js', '.js', '.msx']
    },

    module: {
      preLoaders: [
        {
          test: /\.js$/,
          exclude: [/node_modules/, /mithril-palantir\.js/],
          loader: 'jshint'
        }
      ],

      loaders: [
        // loading every .js file ca be slow. Use this per file instead: import Animal from "babel!./Animal.js";
        {
          test: /\.js$/, exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.coffee$/,
          loader: 'coffee'
        },
        {
          test: /\.msx$/,
          loader: 'sweetjs?modules[]=msx-reader/macros/msx-macro,readers[]=msx-reader'
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        },
        {
          test: /\.styl/,
          loader: 'style!css!stylus'
        },
        {
          test: /\.less$/,
          loader: 'style!css!less'
        },
        {
          test: /\.gif/,
          loader: 'url-loader?limit=10000&mimetype=image/gif'
        },
        {
          test: /\.jpg/,
          loader: 'url-loader?limit=10000&mimetype=image/jpg'
        },
        {
          test: /\.png/,
          loader: 'url-loader?limit=10000&mimetype=image/png'
        }
      ]
    },

    // more options in the optional jshint object
    // see: http://jshint.com/docs/ for more details
    jshint: {

      // node keywords and variables (ie. console.log, use strict
      node: true,

      // suppress semicolon warnings
      asi: true,

      // This option prohibits the use of a variable before it was defined.
      // JavaScript has function scope only and, in addition to that,
      // all variables are always moved—or hoisted— to the top of the function.
      // This behavior can lead to some very nasty bugs and that's why it is safer
      // to always use variable only after they have been explicitly defined.
      // Setting this option to "nofunc" will allow function declarations to be ignored.
      latedef: 'nofunc',

      // any jshint option http://www.jshint.com/docs/options/
      // i. e.
      camelcase: true,

      // any globals that should be suppressed
      globals: ['m'],

      // jshint errors are displayed by default as warnings
      // set emitErrors to true to display them as errors
      emitErrors: false,

      // jshint to not interrupt the compilation
      // if you want any file with jshint errors to fail
      // set failOnHint to true
      failOnHint: false,

      // custom reporter function
      reporter: require('./jshintReporter.js')
    }
  };
};
