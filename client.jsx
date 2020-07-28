const React = require("react");
const ReactDom = require("react-dom");

//필요한것만 불러올 수 있다.
const WordRelay = require("./WordRelay");

ReactDom.render(<WordRelay />, document.querySelector("#root"));

//이걸 사용해서 script로 react,react-dom을 안불러와도 된다.
// .jsx는 jsx문법을 쓰고 있다. react 전용 파일이다를 알려줄 수 있음.
