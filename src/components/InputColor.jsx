const { useState } = require("react");

const InputColor = () => {
  const [inputValue, setInputValue] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    if (inputValue.length < 3) {
      setBackgroundColor("white");
    } else if (inputValue.length >= 3 && inputValue.length <= 6) {
      setBackgroundColor("yellow");
    } else if (inputValue.length > 6 && inputValue.length <= 9) {
      setBackgroundColor("green");
    } else if (inputValue.length > 9) {
      setBackgroundColor("red");
    }
  };

  return (
    <div style={{ backgroundColor }}>
      <label>Enter text:</label>
      <input type="text" value={inputValue} onChange={inputHandler} />
    </div>
  );
};

export default InputColor;
