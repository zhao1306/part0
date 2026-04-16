import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const checkFilter = (person) => {
    if (typeof person.name != "string") {
      console.log("checking filter on wrong object ", person);
      return false;
    }
    return person.name.toLowerCase().includes(filter);
  };
  const filtered = persons.filter((person) => checkFilter(person));
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter:{" "}
        <input onChange={(e) => setFilter(e.target.value)} value={filter} />
      </div>
      <h2>add a new</h2>
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
      <h2>Numbers</h2>
      {filter === ""
        ? persons.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))
        : filtered.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
