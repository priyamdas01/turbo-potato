
function Employee({emp}){
    console.log(emp)
    return (
        <div>
            <div id = "emp-card">
                <img src = {emp.image}></img>
                <h3>{emp.name}</h3>
                <h4>{emp.dob}</h4>
            </div>
        </div>
    )
}

export default Employee;