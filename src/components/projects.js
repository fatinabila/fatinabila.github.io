import React from 'react';

const ProjectsComponent = () => {

    return  (

        <div className="container">

            <h3>My Project</h3>

            <div className="carousel slide carouselCustom" data-ride="carousel" id="slider">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                       <a href="https://fatinabila.github.io/covid19-dashboard/" target="_blank" rel="noopener noreferrer"> 
                         <img src="img/covid19-preview.png" className="d-block w-100" alt="..."/>
                       </a>
                    </div>

               
                </div>

            </div>

            

         
        </div>

    )
}

export default ProjectsComponent