

function Header({emps, sortBy}){
    const youngestToOldest = [...emps];
    const oldestToYoungest = [...emps];
    const juniorToSenior = [...emps];
    const seniorToJunior = [...emps];
    let allMales = [...emps];
    let allFemales = [...emps];

    allMales = allMales.filter((emp)=>emp.gender.toLowerCase() === "male");
    allFemales = allFemales.filter((emp)=>emp.gender.toLowerCase() === "female");
    
    youngestToOldest.sort((a, b)=>{
        const aAge = new Date().getFullYear() - parseInt(a.dob.slice(-4));
        const bAge =  new Date().getFullYear() - parseInt(b.dob.slice(-4));
        if(aAge === bAge){
            const monthDifference = (new Date().getMonth() - parseInt(a.dob.slice(-7, -5))) - (new Date().getMonth() - parseInt(b.dob.slice(-7, -5)));
            return monthDifference;
        }
        console.log(aAge- bAge);
        return aAge-bAge;
    })
    oldestToYoungest.sort((a, b)=>{
        const aAge = new Date().getFullYear() - parseInt(a.dob.slice(-4));
        const bAge =  new Date().getFullYear() - parseInt(b.dob.slice(-4));
        if(aAge === bAge){
            const monthDifference = (new Date().getMonth() - parseInt(b.dob.slice(-7, -5))) - (new Date().getMonth() - parseInt(a.dob.slice(-7, -5)));
            return monthDifference;
        }
        console.log(bAge-aAge);
        return bAge-aAge;
    })
    juniorToSenior.sort((a, b)=>{
        const aAge = new Date().getFullYear() - parseInt(a["joining-date"].slice(-4));
        const bAge =  new Date().getFullYear() - parseInt(b["joining-date"].slice(-4));
        if(aAge === bAge){
            const monthDifference = (new Date().getMonth() - parseInt(a.dob.slice(-7, -5))) - (new Date().getMonth() - parseInt(b.dob.slice(-7, -5)));
            return monthDifference;
        }
        console.log(aAge- bAge);
        return aAge-bAge;
    })
    seniorToJunior.sort((a, b)=>{
        const aAge = new Date().getFullYear() - parseInt(a["joining-date"].slice(-4));
        const bAge =  new Date().getFullYear() - parseInt(b["joining-date"].slice(-4));
        if(aAge === bAge){
            const monthDifference = (new Date().getMonth() - parseInt(b.dob.slice(-7, -5))) - (new Date().getMonth() - parseInt(a.dob.slice(-7, -5)));
            return monthDifference;
        }
        console.log(bAge-aAge);
        return bAge-aAge;
    })
    // console.log(oldestToYoungest);
    // console.log(youngestToOldest)
    

    return (
        <nav id = "main-page-nav">
            <div id = "title-logo">
                Turbo Potato
            </div>
            
            <ul>
            Sort employees based on: 
                <li><button onClick={e=>sortBy(youngestToOldest)}>Age(Youngest to Oldest)</button></li>
                <li><button onClick={e=>sortBy(oldestToYoungest)}>Age(Oldest to Youngest)</button></li>
                <li><button onClick={e=>sortBy(juniorToSenior)}>Experience(Junior to Senior)</button></li>
                <li><button onClick={e=>sortBy(seniorToJunior)}>Experience(Semior to Junior)</button></li>
                <li><button onClick={e=>sortBy(allMales)}>Only Males</button></li>
                <li><button onClick={e=>sortBy(allFemales)}>Only Females</button></li>
            </ul>
            
            
            
            
            
             
        </nav>
    );
}

export default Header;