const Numbers = ({ persons, filtered, filter }) => {
  return filter === ""
    ? persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))
    : filtered.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ));
};
export default Numbers;
