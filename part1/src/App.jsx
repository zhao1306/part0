const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>You are {props.age} years old</p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Bro" />
      <Hello name="Dren" age={10 + "1"} />
      <Hello name="Jammedyam" age={20} />
    </>
  );
};
export default App;
