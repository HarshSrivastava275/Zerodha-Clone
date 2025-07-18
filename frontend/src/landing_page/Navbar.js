import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg border-bottom " style={{ backgroundColor: "#FFF" }}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src='/media/images/logo.svg' style={{ width: "25%" }}></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex" role="search">
                        <ul className="navbar-nav  mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/product">Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="support">Support</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-bars"></i></Link>
                            </li>


                        </ul>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;