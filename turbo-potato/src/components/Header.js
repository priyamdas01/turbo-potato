<<<<<<< HEAD
import React, { useState } from 'react';

function Header(updateSearch){

    // const [query, setQuery] = useState('');

    // const handleInputChange = (event) => {
    //   const newQuery = event.target.value;
    //   setQuery(newQuery);
    // };

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     onFilter(query);
    // }    

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0" >
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {(e) => updateSearch(e.target.value)}></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
=======


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
>>>>>>> 296716bbd2b0fac52dc94bc049913eba0290e997
            </div>

            <ul>
                <li><button onClick={e=>sortBy(youngestToOldest)}>Age (Youngest -&gt; Oldest)</button></li>
                <li><button onClick={e=>sortBy(oldestToYoungest)}>Age (Oldest -&gt; Youngest)</button></li>
                <li><button onClick={e=>sortBy(juniorToSenior)}>Experience (Junior -&gt; Senior)</button></li>
                <li><button onClick={e=>sortBy(seniorToJunior)}>Experience (Senior -&gt; Junior)</button></li>
                <li><button onClick={e=>sortBy(allMales)}>Male Employees</button></li>
                <li><button onClick={e=>sortBy(allFemales)}>Female Employees</button></li>
            </ul>
             
        </nav>
    );
}

export default Header;