import { useState } from "react";

const Button = ({ onClick, name }) => <button onClick={onClick}>{name}</button>;

const Feedback = ({ addGood, addNeutral, addBad }) => {
  console.log(addGood);
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGood} name="good" />
      <Button onClick={addNeutral} name="neutral" />
      <Button onClick={addBad} name="bad" />
    </div>
  );
};

const Stats = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    const newGood = good + 1;
    setGood(newGood);
  };

  const addNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };

  const addBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
  };

  return (
    <div>
      <Feedback addGood={addGood} addNeutral={addNeutral} addBad={addBad} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
