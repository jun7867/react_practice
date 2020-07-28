const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development", // => 실서비스: production
  devtool: "eval", //빠르게 하겠다.
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/, //js, jsx파일 룰 적용 (정규표현식)
        loader: "babel-loader", // 바벨을 적용하겠다.
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        }, // option적용!
      },
    ],
  }, // entry에 있는 파일을 읽어서 모듈 적용후 output으로 넘김.
  output: {
    path: path.join(__dirname, "dist"), // path.join은 현재 폴더에서 경로 설정
    filename: "app.js",
  }, //출력
};

//여러개 파일을 합쳐서 app.js 한개만 쓰게 하려고 한것.
//clinet.jsx에서 WordRelay.jsx를 불러오기 때문에 따로 넣을 필요는 없다. (resolve가 있으면 확장자도 안넣어도 된다.)
