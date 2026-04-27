import { useState, useEffect } from "react";
import axios from "axios";

import Form from "./Form.jsx";
import Filter from "./Filter.jsx";
import Numbers from "./Numbers.jsx";
import personsService from "./services/persons.jsx";
import Notification from "./Notification.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notifMessage, setNotifMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      console.log(initialPersons);
      setPersons(initialPersons);
    });
  }, []);

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
      <Notification success={success} message={notifMessage} />
      <Filter
        persons={persons}
        setPersons={setPersons}
        filter={filter}
        setFilter={setFilter}
      />
      <h2>add a new</h2>
      <Form
        persons={persons}
        setPersons={setPersons}
        setSuccess={setSuccess}
        setNotifMessage={setNotifMessage}
      />
      <h2>Numbers</h2>
      <Numbers
        persons={persons}
        setPersons={setPersons}
        filtered={filtered}
        filter={filter}
      />
    </div>
  );
};

export default App;
