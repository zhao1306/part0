const express = require("express");
const app = express();

app.use(express.json());

const generateId = () => {
  const maxId =
    data.length > 0 ? Math.max(...data.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

let data = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/info", (request, response) => {
  const id = generateId() - 1;
  const timestamp = new Date();
  const msg =
    "<p>" +
    `There are ${id} phone numbers.` +
    "</p><p>" +
    `Sent at ${timestamp}` +
    "</p>";
  console.log(msg);
  response.send(msg);
});

app.get("/api/persons", (request, response) => {
  console.log(data);
  response.json(data);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = data.find((note) => note.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
