import React from 'react';

const AboutMeComponent = () => {

    fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "qPlQHf4kXMmshH0glnYIWnVnResJp1NdWC1jsnpHBkvLsm5HT1"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });



    return  (

        <div className="container">

            <h3>About Me</h3>

            <p>
            My name is Fatin Nabila Azahari. Just call me Fatin, a passionate front end developer who loves to keep up to date with the latest technologies used in web and software development.
            </p>
            <p>
            Front end developer with three years professional working experience, I have an extensive knowledge in HTML, CSS, Javascript, layout and responsive web design.
            Don't forget to check my GitHub, LinkedIn and CodePen.io!
            </p>
        </div>

    )
}

export default AboutMeComponent