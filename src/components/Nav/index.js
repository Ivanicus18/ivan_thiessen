import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        portfolioSelected,
        setPortfolioSelected,
    } = props;
    
    return (
        <header>
            <div className="container flex-row justify-space-between align-center py-3">
                <h1 className="page-title text-secondary bg-dark py-2 px-3">Ivan Thiessen</h1>
                <nav className="flex-row">
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" data-testid="about" href="#about" onClick={() => setPortfolioSelected(false)}>
                        About me
                    </a>
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" data-testid="portfolio" href="#portfolio" onClick={() => setPortfolioSelected(true)}>
                        Portfolio
                    </a>
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/Ivanicus18" target="blank">GitHub</a>
                </nav>
            </div>
        </header>
    );
}

export default Nav