import React, { useEffect, useState, } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import EmployeesContainer from "./EmployeesContainer";
import Login from "./Login";
import SearchBar from "./SearchBar";
import EmployeeInfo from "./EmployeeInfo";
import NewEmployee from "./NewEmployee";

function App() {

  const [emps, setEmps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((r) => r.json())
      .then((data) => setEmps(data))
  }, []);
  function addNewEmployee(newEmployee){
    setEmps((emps)=>[...emps, newEmployee])
  }

  function removeEmp(id) {
    const newList = emps.filter(l => l.id !== id)
    setEmps(newList);
  }
  function sortByAge(sortedEmps){
    console.log(sortedEmps)
    setEmps(sortedEmps);

  } 

  return (
    <div className="App">

      <Switch>
        <Route exact path="/employees">
<<<<<<< HEAD
          <Header emps = {emps} sortByAge={sortByAge}></Header>
          <SearchBar></SearchBar>
          <NewEmployee addNewEmp = {addNewEmployee}></NewEmployee>
          <EmployeesContainer emps = {emps} onRemoval={removeEmp}></EmployeesContainer> 
=======
          <Header></Header>
          <EmployeesContainer emps={emps} onRemoval={removeEmp}></EmployeesContainer>
>>>>>>> 82409b831504e37229c88abaeaac3580112ff0b0
        </Route>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route path="/employees/:id">
          <EmployeeInfo></EmployeeInfo>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

