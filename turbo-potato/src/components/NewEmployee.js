import { useEffect, useState } from "react";
import "../index.css"
import empImg from "../employee.png" 

function NewEmployee({addNewEmp}){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");
    const [jdate, setJdate] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mantra, setMantra] = useState("");
    const handleClick = (e, particularFunction) =>{
        particularFunction(e.target.value);
    }
    const newEmp = {
        name,
        gender,
        dob,
        image,
        bio,
        "joining-date":jdate,
        address,
        email,
        mantra
    }
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newEmp)
    }
    
    const handleBtnClick = (e) => {
        // e.preventDefault();
            fetch("http://localhost:3000/employees", requestOptions)
            .then(r=>r.json())
            .then(data=>{
                addNewEmp(data);
            })
        // e.target.value = "";
    }
    
    return (
        <div>
            <img src = {empImg} id = "emp-image"></img>
            <form>
                <div id = "form-div">
                <label htmlFor="name">Name: </label>
                <input type="text" value={name} name="name" placeholder="Enter name" onChange={e=>handleClick(e,setName)} id = "name"required></input>
                <br></br>
                <label htmlFor="gender">Gender: </label>
                <input type="text" value={gender} name="gender" placeholder="Enter gender" onChange={e=>handleClick(e,setGender)} id = "gender"required></input>
                <br></br>
                <label htmlFor="dob">Date of birth: </label>
                <input type="text" value={dob} name="dob" placeholder="Enter date of birth" onChange={e=>handleClick(e,setDob)} id = "dob"required></input>
                <br></br>
                <label htmlFor="image">Image: </label>
                <input type="text" value={image} name="image" placeholder="Enter image link" onChange={e=>handleClick(e,setImage)} id = "image"required></input>
                <br></br>
                <label htmlFor="bio">Bio: </label>
                <input type="text" value={bio} name="bio" placeholder="Enter bio" onChange={e=>handleClick(e,setBio)} id = "bio"required></input>
                <br></br>
                <label htmlFor="joining-date">Joining date: </label>
                <input type="text" value={jdate} name="joining-date" placeholder="Enter joining date" onChange={e=>handleClick(e,setJdate)} id = "joining-date"required></input>
                <br></br>
                <label htmlFor="address">Address: </label>
                <input type="text" value={address} name="address" placeholder="Enter address" onChange={e=>handleClick(e,setAddress)} id = "address"required></input>
                <br></br>
                <label htmlFor="email">Email: </label>
                <input type="email" value={email} name="email" placeholder="Enter emal" onChange={e=>handleClick(e,setEmail)} id = "email"required></input>
                <br></br>
                <label htmlFor="mantra">Mantra: </label>
                <input type="text" value={mantra} name="mantra" placeholder="Enter mantra" onChange={e=>handleClick(e,setMantra)} id = "mantra"required></input>
                <br></br>
                </div>
                
                <button onClick={handleBtnClick}>Submit</button>
            </form>
        </div>
    )
}

export default NewEmployee;