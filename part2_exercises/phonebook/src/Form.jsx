import { useState } from "react";
import personsService from "./services/persons.jsx";

const Form = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleForm = (event) => {
    event.preventDefault();
    console.log(newName, " is the new name");
    console.log(newNumber, " is the new num");

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    const names = persons.map((person) => person.name);
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personsService
        .create(newPerson)
        .then((response) => setPersons(persons.concat(newPerson)));

      setNewName("");
      setNewNumber("");
    }
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          name:{" "}
          <input onChange={(e) => setNewName(e.target.value)} value={newName} />
        </div>
        <div>
          number:{" "}
          <input
            onChange={(e) => setNewNumber(e.target.value)}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
