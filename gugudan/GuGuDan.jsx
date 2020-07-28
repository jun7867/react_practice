const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
  //state 선언시 함수 안에다가 써야한다.
  //use로 시작하면 hooks다.
  //비구조화 할당(= 구조 분해 할당 방식)
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null); //useRef로 Dom에 접근.

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답: " + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡! ");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  //id="" 을 쓰는 이유는 react에서는 class -> className를 써야한다.
  //같은 이유로 for -> htmlFor
  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>입력! </button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = GuGuDan;
