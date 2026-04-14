import { useState } from "react";

const Button = ({ onClick, name }) => <button onClick={onClick}>{name}</button>;

const Statline = ({ text, value, text2 }) => (
  <tr>
    <td>{text}</td>
    <td>
      {value} {text2}
    </td>
  </tr>
);

const Feedback = ({ addGood, addNeutral, addBad }) => {
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
  console.log(good, neutral, bad);
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = (good / total) * 100;
  return (
    <div>
      <table>
        <h1>statistics</h1>
        <Statline text="good" value={good} />
        <Statline text="neutral" value={neutral} />
        <Statline text="bad" value={bad} />
        <Statline text="all" value={total} />
        <Statline text="average" value={average} />
        <Statline text="positive" value={positive} text2="%" />
      </table>
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
