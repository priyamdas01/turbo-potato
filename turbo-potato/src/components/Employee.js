function Employee({ emp, onRemoval }) {


    return (
        <div>
            <div id="emp-card">
                <img src={emp.image}></img>
                <h3>{emp.name}</h3>
                <h4>{emp.dob}</h4>
                <span id="deleteBtn" onClick={() => { if (window.confirm('Are you sure you want to remove this employee?')) onRemoval(emp.id) }}>X</span>
            </div>
        </div >
    )
}

export default Employee;