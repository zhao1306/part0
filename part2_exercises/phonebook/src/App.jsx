import { useState } from "react";

import Form from "./Form.jsx";
import Filter from "./Filter.jsx";
import Numbers from "./Numbers.jsx";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filter, setFilter] = useState("");
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
      <Filter
        persons={persons}
        setPersons={setPersons}
        filter={filter}
        setFilter={setFilter}
      />
      <h2>add a new</h2>
      <Form persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Numbers persons={persons} filtered={filtered} filter={filter} />
    </div>
  );
};

export default App;
