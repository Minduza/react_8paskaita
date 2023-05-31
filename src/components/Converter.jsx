import { useState } from "react";

const Converter = () => {
  const [weight, setWeight] = useState(0);

  const weigthHandle = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div>
      <label>Įveskite svorį, kg:</label>
      <input type="text" value={weight} onChange={weigthHandle} />
      <br />
      <span>Tonų: {weight * 0.001} t</span>
      <br />
      <span>Gramų: {weight * 1000} g</span>
      <br />
      <span>Poundų: {weight * 2.2046} lb</span>
    </div>
  );
};

export default Converter;
