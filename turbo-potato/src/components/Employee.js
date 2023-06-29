// import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Employee({ emp, onRemoval }) {

    let history = useHistory();

    function handleClick() {
        history.push(`/employees/${emp.id}`);
    }

    return (
        <div>
            <div id="emp-card">
                <img src={emp.image}></img>
                <h3>{emp.name}</h3>
                <h4>{emp.dob}</h4>
                <button onClick={handleClick}>
                    More Info
                </button>
                <div id="deleteBtn" onClick={() => { if (window.confirm('Are you sure you want to remove this employee?')) onRemoval(emp.id) }}>X</div>
            </div>
        </div >
    )
}

export default Employee;