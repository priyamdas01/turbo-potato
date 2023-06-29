import { useState } from "react";

function Header({emps, sortByAge}){
    const juniorToSenior = [...emps];
    const seniorToJunior = [...emps];

    
    juniorToSenior.sort((a, b)=>{
        const aAge = new Date().getFullYear() - parseInt(a.dob.slice(-4));
        const bAge =  new Date().getFullYear() - parseInt(b.dob.slice(-4));
        console.log(aAge- bAge);
        return aAge-bAge;
    })
    seniorToJunior.sort((a, b)=>{
        const aAge = new Date().getFullYear() - parseInt(a.dob.slice(-4));
        const bAge =  new Date().getFullYear() - parseInt(b.dob.slice(-4));
        console.log(bAge-aAge);
        return bAge-aAge;
    })
    // console.log(oldestToYoungest);
    // console.log(youngestToOldest)
    

    return (
        <div>
            Sort employees based on: 
            <button onClick={e=>sortByAge(juniorToSenior)}>Age(junior to senior)</button>
            <button onClick={e=>sortByAge(seniorToJunior)}>Age(senior to junior)</button>
            {
                /* add as many filtering options as you want */
            }
        </div>
    );
}

export default Header;