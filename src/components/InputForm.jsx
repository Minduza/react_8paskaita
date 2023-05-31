const { useState, useRef } = require("react");

const InputForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const focusInput = useRef(null);

  const nameHangler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const addAgeHandler = () => {
    setAge(+age + 10);
    focusInput.current.focus();
  };

  //   let ageRef = useRef(age);

  return (
    <div>
      <label>First name:</label>
      <input ref={focusInput} type="text" value={name} onChange={nameHangler} />
      <label>Age:</label>
      <input type="number" value={age} onChange={ageHandler} />
      <button onClick={addAgeHandler}>Add 10 years</button>
      <h2>
        {name} age is {age}
      </h2>
    </div>
  );
};

export default InputForm;
