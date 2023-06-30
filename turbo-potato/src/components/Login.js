import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../companylogo.png"
import { useEffect, useState } from "react";


function Login(){
    let history = useHistory();
    const [adminEmail, setAdminEmail] = useState("");
    useEffect(() => {
        fetch("http://localhost:3000/admin")
        .then(r=>r.json())
        .then(data=>setAdminEmail(data.email))
    }, []);
    const [adminPass, setAdminPass] = useState("");
    useEffect(() => {
        fetch("http://localhost:3000/admin")
        .then(r=>r.json())
        .then(data=>setAdminPass(data.pass))
    }, []);
    
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    console.log(adminEmail, adminPass);
    console.log(adminEmail == email && adminPass == pass);
    const handleClick = () => {
        if(adminEmail === email && adminPass == pass){
            history.push("/employees");
        }else{
            alert("wrong admin info")
        }
        
    }
    return (
        <div id = "login-container">
            <div>
                <img src = {logo}></img>
            </div>
            <form>
                <div id = "logo-name">
                    Turbo Potato
                </div>
                <label>Email: </label>
               <input type="email" id="email" onChange={handleEmailChange}></input> 
               <br></br>
               <label>Password: </label>
               <input type="password" id="pass" onChange={handlePassChange}></input> 
               <br></br>
               <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
}

export default Login;