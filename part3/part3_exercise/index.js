const express = require("express");
const app = express();

app.use(express.json());

const maxId = () => {
  const maxId =
    data.length > 0 ? Math.max(...data.map((n) => Number(n.id))) : 0;
  return String(maxId);
};

const generateId = () => {
  //1 billion 1,000,000,000
  return Math.floor(Math.random() * 1000000000);
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
  const id = maxId();
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
  const person = data.find((entry) => entry.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  data = data.filter((entry) => entry.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  console.log(generateId());
  if (!body) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  }

  const names = data.map((person) => person.name);
  console.log(names);
  if (names.find((name) => name === body.name)) {
    return response.status(409).json({
      error: "name must be unique",
    });
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };
  data = data.concat(person);
  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
