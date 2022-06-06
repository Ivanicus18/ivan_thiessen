import React from 'react';

const About = () => {
    return (
        <section className="my-3" id="about">
            <h2 className="text-dark bg-primary p-2 display-inline-block">About Me</h2>
            <div className="flex-row justify-space-between">
                <a className="col-12 col-md-8 mb-2 flex-column">
                    <p>A former blue-collar who's traded for white and become a Full Stack Web Developer. MERN-proficient, proficient in HTML, CSS, Javascript, and MySQL, very familiar with jQuery, Bootstrap, Express.js, Sequelize, and React. Slowly working on adding Python and C++ to the library through self-teaching.</p>
                    <p>A PC gamer from youth, has always had a fascination with computers and programming. After high school, joined the army as a Satellite Operator/Maintainer, where he was first exposed to concepts like servers and networking. After the Army, went into the workforce as a blue-collar laborer, before a near-injury and the onset of the pandemic stated that it was time to switch careers.</p>
                </a>
                <a href="https://imgur.com/51QDoPn" className="col-12 col-md-3 mb-2 flex-column">
                    <img src="https://i.imgur.com/51QDoPn.png" title="source: imgur.com" />
                </a>
            </div>
        </section>
    );
}

export default About;