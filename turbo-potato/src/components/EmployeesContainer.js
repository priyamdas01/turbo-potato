import Employee from "./Employee"
function EmployeesContainer({emps, onRemoval}){

    const jsxEmps = emps.map(emp => <Employee onRemoval={onRemoval} key={emp.id} emp = {emp}></Employee>);
    
    return (
        <div id = "emps-container">
            {jsxEmps}
        </div>
    );
}

export default EmployeesContainer;