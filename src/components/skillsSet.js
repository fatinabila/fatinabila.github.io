import React from 'react';
import "../styling/skill.css"


const SkillComponent = () => {

    let colorPallete =["rgb(33 67 167)", "#f6f5fa", "#DCD6F7", "#FFF1D0"]

    let skills = [

        { skill : "React" , src : "/img/react.svg" , color: colorPallete[0]},
        { skill : "Angular 2+" , src : "/img/angularjs.svg" , color: colorPallete[1] },
        { skill : "CSS" , src : "/img/css3.svg" ,color: colorPallete[1] },
        { skill : "HTML" , src : "/img/html5.svg" ,color: colorPallete[1] },

        { skill : "JavaScript" , src : "/img/javascript.svg" ,color: colorPallete[1] },
        { skill : "MySQL" , src : "/img/mysql.svg",color: colorPallete[1] },
        { skill : "PHP" , src : "/img/php.svg",color: colorPallete[1] },
        { skill : "TypeScript" , src : "/img/typescript.svg",color: colorPallete[1]  },

        { skill : "WordPress" , src : "/img/wordpress.svg",color: colorPallete[1]  },
        { skill : "Adobe XD" , src : "/img/adobexd.svg", color: colorPallete[1]  },
        { skill : "JSON" , src : "/img/json.svg",color: colorPallete[1]  },
        { skill : "jQuery" , src : "/img/jquery.svg",color: colorPallete[1]  },
        
    ]


    const SkillTemplate = props => {

        return (
          <div className="parentSkill col-xs-2">
            
             <div className="skill" style={{backgroundColor: props.color}}>
                 <img src={props.src}/>
             </div>

             <p className="skillName"> {props.name}</p>
          </div>
        );
      };



    return  (

        <div className="container">

            <h3>I'm skilled in</h3>

            <div className="row container rowSkill">

            {skills.map((skill,index)  => (
              
            <SkillTemplate 
            key ={index} 
            src={skill.src}
            name = {skill.skill}
            color ={skill.color} />
             
            ))} 
            
            </div>

  

            
        </div>


    )
}

export default SkillComponent