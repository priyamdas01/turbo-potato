import React, { useEffect, useState, } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import EmployeesContainer from "./EmployeesContainer";
import Login from "./Login";
import EmployeeInfo from "./EmployeeInfo";
import NewEmployee from "./NewEmployee";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../index.css"


function App() {

  const [emps, setEmps] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((r) => r.json())
      .then((data) => setEmps(data))
  }, []);
  function addNewEmployee(newEmployee) {
    setEmps((emps) => [...emps, newEmployee])
  }

  function removeEmp(id) {

    fetch(`http://localhost:3000/employees/${id}`, {
      method: "DELETE",
    })

    const newList = emps.filter(l => l.id !== id)
    setEmps(newList);
  }
  function sortBy(sortedEmps) {
    console.log(sortedEmps);
    setEmps(sortedEmps);

  }
  const handleClick = ()=>{
    history.push("/form");
  }
  const handleHomePageClick = ()=>{
    history.push("/employees")
  }

  return (
    <div className="App">

      <Switch>
        <Route exact path="/employees">
          <Header emps = {emps} sortBy={sortBy}></Header>
          
          <button onClick={handleClick}>Register New Employee</button>
          <EmployeesContainer emps = {emps} onRemoval={removeEmp}></EmployeesContainer> 
        </Route>
        <Route exact path="/">
          <Login className="login-page"></Login>
        </Route>
        <Route path="/employees/:id">
          <EmployeeInfo></EmployeeInfo>
        </Route>
        <Route path = "/form" >
          <div id = "new-form">
            <NewEmployee addNewEmp = {addNewEmployee}></NewEmployee>
            <div id = "form-home-page-btn">
              <button onClick={handleHomePageClick}>Home Page</button>  

            </div>

          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

