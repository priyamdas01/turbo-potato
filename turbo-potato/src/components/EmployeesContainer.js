import Employee from "./Employee"
<<<<<<< HEAD
function EmployeesContainer({emps}){
    const jsxEmps = emps.map(emp => <Employee key={emp.id} emp = {emp}></Employee>);
=======
import SearchBar from "./SearchBar";
import { useState } from "react";

function EmployeesContainer({ emps, onRemoval }) {

    const [search, setSearch] = useState('')

    const filteredEmployees = emps.filter(emp =>
        emp.name.toLowerCase().includes(search.toLowerCase())
    );

    const jsxEmps = filteredEmployees.map(emp => <Employee onRemoval={onRemoval} key={emp.id} emp={emp}></Employee>);

>>>>>>> 296716bbd2b0fac52dc94bc049913eba0290e997
    return (
        <div>
            <label>Search: </label>
            <SearchBar setSearch={setSearch}></SearchBar>
            <div id="emps-container">
                {jsxEmps}
            </div>
        </div>
    );
}

export default EmployeesContainer;