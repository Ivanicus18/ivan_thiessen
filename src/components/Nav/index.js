import React from 'react';

const Nav = () => {
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    const categories = [
        {
            name: "Portfolio",
            description:
                "Ivan's projects showcasing his skills with coding."
        }
    ];
    return (
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">Ivan Thiessen</h1>
                <nav class="flex-row">
                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="#about">
                        About me
                    </a>
                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/Ivanicus18">GitHub</a>
                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark">
                        <span>Contact</span>
                    </a>
                    {categories.map((category) => (
                        <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" key={category.name}>
                            <span onClick={categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Nav