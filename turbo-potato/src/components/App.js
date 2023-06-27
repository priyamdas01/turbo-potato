import React, { useEffect, useState, } from "react";
import Header from "./Header";

import EmployeesContainer from "./EmployeesContainer";

function App() {

  const [emps, setEmps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((r) => r.json())
      .then((data) => setEmps(data))
  }, []);

  function removeEmp(id) {
    alert(id)
    const newList = emps.filter(l => l.id !== id)
    setEmps(newList);
}

  return (
    <div className="App">
      <Header></Header>
      <EmployeesContainer emps={emps} onRemoval={removeEmp}></EmployeesContainer>
    </div>
  );
}

export default App;

