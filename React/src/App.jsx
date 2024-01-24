import { useState } from "react";
import "./App.css";

function App() {
  const [searchEmployee, setSearchEmployee] = useState("");
  const [Employeeresults, setEmployeeResults] = useState([]);

  const handleEmployeeSearch = async (event) => {
    const dataInput = event.target.value;
    setSearchEmployee(dataInput);

    if (dataInput.trim() === "") {
      setEmployeeResults([]);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: dataInput }),
      });
      const data = await response.json();
      setEmployeeResults(data);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div>
      <h3>Search Contacts</h3>
      <input
        type="text"
        value={searchEmployee}
        onChange={handleEmployeeSearch}
        placeholder="searrch employee records"
      />
      <ul>
        {Employeeresults.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
