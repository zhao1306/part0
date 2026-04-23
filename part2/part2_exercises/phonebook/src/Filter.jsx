const Filter = ({ persons, setPersons, filter, setFilter }) => {
  return (
    <div>
      filter:{" "}
      <input onChange={(e) => setFilter(e.target.value)} value={filter} />
    </div>
  );
};

export default Filter;
