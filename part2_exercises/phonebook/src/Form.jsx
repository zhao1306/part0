import { useState } from "react";
import personsService from "./services/persons.jsx";

const Form = ({ persons, setPersons, setSuccess, setNotifMessage }) => {
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
      window.confirm(
        `${newName} is already added to phonebook. Do you want to replace with new number?`,
      );
      const replacedId = persons.find((person) => person.name === newName).id;
      console.log(replacedId);
      personsService
        .update(replacedId, newPerson)
        .then((response) => {
          console.log(response);
          const newPersons = persons.map((person) =>
            person.id === replacedId ? response : person,
          );
          setPersons(newPersons);
        })
        .then((response) => {
          setSuccess(true);
          setNotifMessage(`Updated ${newName}`);
          setTimeout(() => {
            setNotifMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setSuccess(false);
          setNotifMessage(`Information of  ${newName} has already been removed from the server`);
          setTimeout(() => {
            setNotifMessage(null);
          }, 5000);
        });
    } else {
      personsService
        .create(newPerson)
        .then((response) => {
          personsService.getAll().then((initialPersons) => {
            console.log(initialPersons);
            setPersons(initialPersons);
          });
        })
        .then((response) => {
          setSuccess(true);
          setNotifMessage(`Added ${newName}`);
          setTimeout(() => {
            setNotifMessage(null);
          }, 5000);
        });

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
