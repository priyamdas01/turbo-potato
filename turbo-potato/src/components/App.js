import React, {useEffect, useState, } from "react";
import Header from "./Header";

import EmployeesContainer from "./EmployeesContainer";

function App() {
  const [emps, setEmps] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/employees")
    .then((r) => r.json())
    .then((data) => setEmps(data))
  }, []);
  
  return (
    <div className="App">
      <Header></Header>
      <EmployeesContainer emps = {emps}></EmployeesContainer>
    </div>
  );
}

export default App;

