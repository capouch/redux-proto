module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3334
  },
  module: {
    loaders: [
      {
        // Note this is a JavaScript regex
        test: /\.js$|.jsx$/,
        // Similar to .gitignore
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
