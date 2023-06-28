import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../companylogo.png"
function Login(){
    let history = useHistory();
    function handleClick(){
        history.push("/employees");
    }
    return (
        <div>
            <img src = {logo}></img>
            <form>
                <label>Enter email: </label>
               <input type="email" id="email" ></input> 
               <br></br>
               <label>Enter password: </label>
               <input type="password" id="pass" ></input> 
               <br></br>
               <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
}

export default Login;