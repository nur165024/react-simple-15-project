import React from 'react';
import { Link } from 'react-router-dom';
import './MenuHover.css';

const MenuHover = () => {
    const handleMouseHover = () => {
        console.log('hello world!');
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Menu Hover</h1>
                        <Link className="btn btn-success mb-3" to="/">Back</Link>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav m-auto">
                                    <li class="nav-item">
                                        <button onMouseMove={handleMouseHover} class="btn mx-3">Home</button>
                                    </li>
                                    <li class="nav-item">
                                        <button onMouseMove={handleMouseHover} class="btn mx-3">Link</button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuHover;