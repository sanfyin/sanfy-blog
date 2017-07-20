var webpack = require('webpack')

module.exports = {
  entry: './webpack/entry.js',
  output: {
    path: __dirname + '/assets/javascripts/',
    filename: 'bundle.js'
  },
 module: {
    loaders: [
        {
            test: /\.js$/,
            exclude:  /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            include: /node_modules/,
            loader:  'style-loader!css-loader'
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
 },
 plugins: [
     new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
      })
     ]
};