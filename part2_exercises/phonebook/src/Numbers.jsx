import axios from "axios";
import personsServices from "./services/persons";
const Numbers = ({ persons, setPersons, filtered, filter }) => {
  const handleDelete = (id) => {
    console.log("deleting ", id);
    personsServices.deletePerson(id).then((response) => {
      console.log("delete tried");
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  return filter === "" ? (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          <p key={person.id}>
            {person.name} {person.number} {person.id}
          </p>
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
      ))}
    </>
  ) : (
    <>
      {filtered.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} {person.number} {person.id}
          </p>
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};
export default Numbers;
