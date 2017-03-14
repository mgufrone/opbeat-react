var fs = require('fs')
var path = require('path')

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    filename: 'server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, '../node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },
  resolve: { 
    modules: [path.resolve(__dirname, '../node_modules'), 'node_modules', __dirname],
  },


  resolveLoader: {
    modulesDirectories: [path.resolve(__dirname, '../node_modules')]
  },

  module: {
    loaders: [
      { test: /\.js$/, include: [__dirname, path.resolve(__dirname, '..', 'opbeat-e2e.js')], loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2' }
    ]
  }

}