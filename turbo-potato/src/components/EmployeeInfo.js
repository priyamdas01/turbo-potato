import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

function EmployeeInfo() {

    const { id } = useParams();
    const [emp, setEmp] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/employees/${id}`)
            .then(r => r.json())
            .then(data => {
                setEmp(data);
            })
    }, [id]);

    const [name, setName] = useState(emp.name);

    const handleClick = () => {
        console.log(name);
    }

    return (
        <div id = "employee-card">
            
            <section id = "employee-details">
                <div id = "emp-info">
                <div id = "emp-name">{emp.name}</div>
                <div id = "employee-pic">
                <img src={emp.image}></img>
                </div>
                
            </div>
                <div id = "span-clusters">
                <span id = "emp-dob">{emp.dob}</span>
                    <span id = "emp-gender">{emp.gender}</span>
                    <span id = "emp-email">{emp.email}</span>
                </div>
                <div id = "emp-bio">{emp.bio}</div>
                <div id = "emp-mantra">"{emp.mantra}"</div>
                <div id = "emp-joined">Joined on: {emp["joining-date"]}</div>
            </section>
            
            
            
            
        </div>
    )
}

export default EmployeeInfo;
