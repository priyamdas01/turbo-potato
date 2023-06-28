// import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Employee({emp}){
    console.log(emp)
    let history = useHistory();
    function handleClick(){
        history.push(`/employees/${emp.id}`);
    }
    return (
        <div>
            <div id = "emp-card">
                <img src = {emp.image}></img>
                <h3>{emp.name}</h3>
                <h4>{emp.dob}</h4>
                <button onClick={handleClick}>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default Employee;