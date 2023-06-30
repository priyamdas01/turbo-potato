import Employee from "./Employee"
function EmployeesContainer({emps}){
    const jsxEmps = emps.map(emp => <Employee key={emp.id} emp = {emp}></Employee>);
    return (
        <div id = "emps-container">
            {jsxEmps}
        </div>
    );
}

export default EmployeesContainer;