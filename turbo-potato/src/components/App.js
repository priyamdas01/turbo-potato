import React, {useEffect, useState, } from "react";
import Header from "./Header";
import Results from "./Results";
// import LoginPage from "./LoginPage";

import EmployeesContainer from "./EmployeesContainer";

function App() {
  const [emps, setEmps] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/employees")
    .then((r) => r.json())
    .then((data) => setEmps(data))
  }, []);

  const [search, setSearch] = useState('');

  const updateSearch = (newSearch) => {
    setSearch(newSearch);
  }

  console.log('test', search);

 
  // const [filteredData, setFilteredData] = useState(emps);

  // const handleFilter = (query) => {
  //   const filtered = emps.filter((item) =>
  //     item.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // };
  
  return (
    <div className="App">
      <Header updateSearch = {updateSearch}/>
      {/* <LoginPage /> */}
      <EmployeesContainer emps = {emps}></EmployeesContainer>
      {/* <Header onFilter={handleFilter} />
      <Results filteredData={filteredData} /> */}
    </div>
  );
}

export default App;

