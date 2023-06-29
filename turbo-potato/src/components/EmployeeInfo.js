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
        <div>
            <img src={emp.image}></img>
            <div>Name: {emp.name}</div>
            <div>Bio: {emp.bio}</div>
            <div>Gender: {emp.gender}</div>
            <div>Date of Birth: {emp.dob}</div>
            <div>Email: {emp.email}</div>
            <div>My Mantra: {emp.mantra}</div>
            <div>Joined on: {emp["joining-date"]}</div>
        </div>
    )
}

export default EmployeeInfo;