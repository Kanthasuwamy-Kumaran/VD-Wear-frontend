import React from "react";
import '../assets/css/style.css'
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap. css';

const Navbar = () => {
    return (
        <div>
            <header class="header fixed-top">
                <div class="header-bottom skewBg" data-header>
                    <div class="container">

                        <a href="logo" class="logo">VD-Wear</a>

                        <nav class="navbar" data-navbar>
                            <ul class="navbar-list">

                                <Link to="/"><li class="navbar-item">
                                    <a href="home" class="navbar-link skewBg" data-nav-link>Home</a>
                                </li>
                                </Link>

                                <li class="navbar-item">
                                    <a href="live" class="navbar-link skewBg" data-nav-link>Demo</a>
                                </li>

                                <li class="navbar-item">
                                    <a href="features" class="navbar-link skewBg" data-nav-link>Features</a>
                                </li>

                                <li class="navbar-item">
                                    <a href="shop" class="navbar-link skewBg" data-nav-link>Shop</a>
                                </li>

                                <li class="navbar-item">
                                    <a href="blog" class="navbar-link skewBg" data-nav-link>Blog</a>
                                </li>

                                <li class="navbar-item">
                                    <a href="Contact" class="navbar-link skewBg" data-nav-link>Contact</a>
                                </li>

                            </ul>
                        </nav>

                        <div class="header-actions">

                            <button class="cart-btn" aria-label="cart">
                                <ion-icon name="cart"></ion-icon>

                                <span class="cart-badge">0</span>
                            </button>

                            <button class="search-btn" aria-label="open search" data-search-toggler>
                                <ion-icon name="search-outline"></ion-icon>
                            </button>

                            <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
                                <ion-icon name="menu-outline" class="menu"></ion-icon>
                                <ion-icon name="close-outline" class="close"></ion-icon>
                            </button>

                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;