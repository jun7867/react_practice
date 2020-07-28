const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: "Hello webpack",
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay;
//이걸 추가하면서 파일 쪼개기 가능
