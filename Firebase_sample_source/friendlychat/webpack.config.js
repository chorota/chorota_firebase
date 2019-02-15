module.exports = {
  /* ビルドの起点となるファイルの設定 */
  entry: './web-start/src/app.jsx',
  output: {
  // 出力先のパス　絶対パスで書かないとエラーになる。
  path: '/Users/cisusr/Documents/github/Firebase_sample_source/friendlychat/web-start/js',
  //ビルド後の出力ファイル名
  filename: 'bundle.js'
  },
  //ソースマップをファイル内に出力させる場合は以下を追加
  devtool: 'inline-source-map',
  module: {
    //loaderの設定 webpack4から loader から　rules に起票が変わった
    rules: [
      {
        test: /\.(js|jsx)$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
        loader: 'babel-loader' // 使用するloader
      }
    ]
  }
}