import { useEffect, useState } from "react";

function NewEmployee({addNewEmp}){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [image, setImage] = useState("");
    const handleClick = (e, particularFunction) =>{
        particularFunction(e.target.value);
    }
    const newEmp = {
        name,
        gender,
        dob,
        image
    }
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newEmp)
    }
    
    const handleBtnClick = (e) => {
        e.preventDefault();
            fetch("http://localhost:3000/employees", requestOptions)
            .then(r=>r.json())
            .then(data=>{
                addNewEmp(data);
            })
    }
    
    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" value={name} name="name" placeholder="Enter employee name here" onChange={e=>handleClick(e,setName)} id = "name"required></input>
                <br></br>
                <label htmlFor="gender">Gender: </label>
                <input type="text" value={gender} name="gender" placeholder="Enter employee gender here" onChange={e=>handleClick(e,setGender)} id = "gender"required></input>
                <br></br>
                <label htmlFor="dob">Date of birth: </label>
                <input type="text" value={dob} name="dob" placeholder="Enter date of birth" onChange={e=>handleClick(e,setDob)} id = "dob"required></input>
                <br></br>
                <label htmlFor="image">Image: </label>
                <input type="text" value={image} name="image" placeholder="Enter image link" onChange={e=>handleClick(e,setImage)} id = "image"required></input>
                <button onClick={handleBtnClick}>Submit</button>
            </form>
        </div>
    )
}

export default NewEmployee;