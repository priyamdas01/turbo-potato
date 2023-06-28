import React, {useEffect, useState, } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import EmployeesContainer from "./EmployeesContainer";
import Login from "./Login";
import SearchBar from "./SearchBar";
import EmployeeInfo from "./EmployeeInfo";

function App() {
  const [emps, setEmps] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/employees")
    .then((r) => r.json())
    .then((data) => setEmps(data))
  }, []);
  
  return (
    <div className="App">

      <Switch> 
        <Route exact path="/employees">
          <Header></Header>
          <SearchBar></SearchBar>
          <EmployeesContainer emps = {emps}></EmployeesContainer> 
        </Route>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route path = "/employees/:id">
          <EmployeeInfo></EmployeeInfo>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

