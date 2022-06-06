import React from 'react';

function Portfolio(props) {
    const { currentCategory } = props;

    return (
        <section className="my-3" id="portfolio">
            <h2 className="text-dark bg-primary p-2 display-inline-block">Work</h2>
            <div className="flex-row justify-space-between">
                <div className="col-12 mb-2 bg-dark text-light p-3">
                    <h3 className="portfolio-item-title text-light">BarFly</h3>
                    <h5 className="portfolio-languages">
                        Built With:
                        JavaScript, HTML, CSS, jQuery, Node
                    </h5>
                    <p>Barfly is a service that allows travellers to search for accomodations and bars/restaurants in a city of their choice.</p>
                    <a href="https://github.com/Ivanicus18/Project1-BarFly" className="btn"><i className="fab fa-github mr-2"></i>View Project on GitHub</a>
                </div>
        
                <div className="col-12 mb-2 bg-dark text-light p-3">
                    <h3 className="portfolio-item-title text-light">sit + stay</h3>
                    <h5 className="portfolio-languages">
                        Built With:
                        JavaScript, HTML, CSS, ES6, Node
                    </h5>
                    <p>sit + stay is a bulletin-board-style website where pet owners can make a profile to manage their pets and share posts about them! sit + stay was designed with intended purpose of connecting pet owners with people who are willing to help take care of their pets if needed.</p>
                    <a href="https://github.com/Ivanicus18/fuzzy-octo-doodle" className="btn"><i className="fab fa-github mr-2"></i>View Project on GitHub</a>
                </div>
        
                <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 className="portfolio-item-title text-light">watchlist</h3>
                    <h5 className="portfolio-languages">
                        Built With:
                        JavaScript, HTML, CSS, ES6, Node
                    </h5>
                    <p>A movie watchlist built using mern stack (MongoDB, Express, React, Node) to make a profile to add movies to your favorite and explore new movies.</p>
                    <a href="https://github.com/Ivanicus18/watchlist" className="btn mt-auto"><i className="fab fa-github mr-2"></i>View Project on GitHub</a>
                </div>
        
                <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 className="portfolio-item-title text-light">Ivan's README Generator</h3>
                    <h5 className="portfolio-languages">
                        Built With:
                        JavaScript, ES6, jQuery, Node
                    </h5>
                    <p>This is in an application for taking user-generated data and turning it into a readable and useable README for Github repositories. Utilizing the node.js platform, users are guided through a series of code prompts that collect the information required to fill out the sections of the README. Once all the prompts have been answered, the application collates the collected data and inputs it into a template literal that will structure the content, depositing the finished product into an easily locateable location within the source folder.</p>
                    <a href="https://github.com/Ivanicus18/Ivan-sReadmeGenerator" className="btn mt-auto"><i className="fab fa-github mr-2"></i>View Project on GitHub</a>
                </div>
        
                <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 className="portfolio-item-title text-light">The Definitive Employee Tracker</h3>
                    <h5 className="portfolio-languages">
                        Built With:
                        JavaScript, HTML, CSS, ES6, Bootstrap, Node
                    </h5>
                    <p>An application for recording and displaying basic employee data in an HTML format.</p>
                    <a href="https://github.com/Ivanicus18/TheDefinitiveEmployeeTracker" className="btn mt-auto"><i className="fab fa-github mr-2"></i>View Project on GitHub</a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;