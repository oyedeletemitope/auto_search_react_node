// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const contacts = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
  { id: 2, firstName: "Jane", lastName: "Doe", email: "jane.doe@example.com" },
  { id: 3, firstName: "dan", lastName: "eki", email: "ekisoweidan@gmail.com" },
  {
    id: 4,
    firstName: "mimi",
    lastName: "babtunde",
    email: "babatunde@gmai.com",
  },
];

app.post("/search", (req, res) => {
  const searchTerm = req.body.search.toLowerCase();
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchTerm) ||
      contact.lastName.toLowerCase().includes(searchTerm) ||
      contact.email.toLowerCase().includes(searchTerm)
  );
  res.json(filteredContacts);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
