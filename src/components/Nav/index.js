import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;
    
    return (
        <header>
            <div className="container flex-row justify-space-between align-center py-3">
                <h1 className="page-title text-secondary bg-dark py-2 px-3">Ivan Thiessen</h1>
                <nav className="flex-row">
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                        About me
                    </a>
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/Ivanicus18">GitHub</a>
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark">
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </a>
                    {categories.map((category) => (
                        <a className={`"ml-2 my-1 px-2 py-1 bg-secondary text-dark" ${
                            currentCategory.name === category.name && !contactSelected && 'navActive'
                        } ` } key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }} >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Nav