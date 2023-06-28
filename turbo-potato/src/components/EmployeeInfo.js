import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
function EmployeeInfo(){
    const {id} = useParams();
    console.log(id)
    const [emp, setEmp] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3000/employees/${id}`)
        .then(r=>r.json())
        .then(data=>{
            setEmp(data);
        })
    }, [id]);
    const [name, setName] = useState(emp.name);
    const handleClick = ()=>{
        console.log(name);
    }
    return (
        <div>
            <img src={emp.image}></img>
            <div>
                {/* <span>{name}</span> */}
                <label>Change Name: </label>
                <input type = "text" onChange={e=>{
                        setName(e.target.value);
                        console.log(e.target.value)
                    }}>
                </input>   
                <button onClick={handleClick}>change</button>
            </div>
            <div>{emp.gender}</div>
            <div>{emp.dob}</div>
        </div>
    )
}

export default EmployeeInfo;