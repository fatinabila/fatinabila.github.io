import React from 'react';
import "../styling/header.css"

const HeaderComponent = () => {

return (

<nav className="site-header sticky-top py-1 ">
    <div className="container d-flex flex-column flex-md-row ">
        <a className="py-2 d-none d-md-inline-block aWrap" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/fatinnabila/">
            <img className=" logoSNS" src='/img/linkedin.svg' alt="linkedin"/>
        </a>

        <a className="py-2 d-none d-md-inline-block aWrap" rel="noopener noreferrer" target="_blank" href="https://github.com/fatinabila">
            <img className=" logoSNS" src='/img/github.svg' alt="github"/>
        </a>
    </div>
</nav>
        
)

}

export default HeaderComponent;