const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => (
  <div>
    {props.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Total = (props) => {
  const parts = props.parts;
  const total = parts
    .map((part) => part.exercises)
    .reduce((prev, next) => prev + next);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const Course = (props) => {
  console.log("incourse", props);
  const { id, name, parts } = props.course;
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;
