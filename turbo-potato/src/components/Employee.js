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
                <div >
                    <img src={emp.image}></img>
                    <div id="deleteBtn" onClick={() => { if (window.confirm('Are you sure you want to remove this employee?')) onRemoval(emp.id) }}>X</div>

                </div>
                <h2>{emp.name}</h2>
                <h5>Age: {new Date().getFullYear() - parseInt(emp.dob.slice(-4))}</h5>
                <button onClick={handleClick}>
                    More Info
                </button>
                
            </div>
        </div >
    )
}

export default Employee;