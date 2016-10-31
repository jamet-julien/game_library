var path    = require('path');
var root    = path.resolve( __dirname);
var webpack = require('webpack');

module.exports = {

    entry :{
        app : ['./src/lib/game.js']
    },

    output : {
      path     : path.resolve( __dirname , './dist'),
      filename : 'game.js'
    },

  module: {
    loaders: [
      {
        test    : /\.js$/,
        loader  : 'babel',
        exclude : /(node_modules|bower_components)/,
        include : root,
        query : {
          presets : ['es2015', 'stage-2']
        }
      }
    ]
  },

  plugins :[
    new webpack.optimize.UglifyJsPlugin({
      comments : false
    })
  ]

};
