import React from 'react'
import backimage from "../assets/images/game-bg3.jpg";
import shop1 from "../assets/images/shop-bg.jpg";
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import '../assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Body() {
    return (
        <div>
             <header class="header border-primary fixed-top">
                <div class="header-bottom skewBg fixed-top" data-header>
                    <div class="container">

                        <a href="logo" class="logo">VD-Wear</a>

                        <nav class="navbar" data-navbar>
                            <ul class="navbar-list">

                                <li class="navbar-item">
                                    <a href="home" class="navbar-link skewBg" data-nav-link>Home</a>
                                </li>

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
            

            <main>
                <article>

                    <section class="section hero" id="home" aria-label="home"
                        style={{ backgroundImage: `url(${backimage})` }}>
                        <div class="container">

                            <div class="hero-content">

                                <p class="hero-subtitle">Virtual Dress Room</p>

                                <h1 class="h1 hero-title">
                                    Create <span class="span">Avatar</span> yourOwn
                                </h1>

                                <p class="hero-text">
                                    Find technology or people for digital projects in public sector and Find an individual specialist develope
                                    researcher.
                                </p>
                                
                                <Link to='/login'>
                                <button class="btn skewBg">GET TRY</button>
                                </Link>
                                

                            </div>



                        </div>
                    </section>


                    <div class="section-wrapper">


                        <section class="section latest-game" aria-label="latest game">
                            <div class="container">

                                <p class="section-subtitle">Latest Releases</p>

                                <h2 class="h2 section-title">
                                    Create & <span class="span">Manage</span>
                                </h2>

                                <ul class="has-scrollbar">

                                    <li class="scrollbar-item">
                                        <div class="latest-game-card">

                                            <figure class="card-banner img-holder" style={{ width: "400", height: "470" }}>
                                                <img src="./assets/images/1.jpg" width="400" height="470" loading="lazy"
                                                    alt="White Walker Daily" class="img-cover" />
                                            </figure>

                                            <div class="card-content">

                                                <a href="boy" class="card-badge skewBg">Now</a>

                                                <h3 class="h3">
                                                    <a href="avatar" class="card-title">Avatar <span class="span">Daily</span></a>
                                                </h3>

                                                <p class="card-price">
                                                    Entry Fee : <span class="span">Free</span>
                                                </p>

                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="latest-game-card">
                                            <figure class="card-banner img-holder" style={{ width: "400", height: "470" }}>
                                                <img src="./assets/images/2.jpg" width="400" height="470" loading="lazy"
                                                    alt="Hunter Killer II" class="img-cover" />
                                            </figure>

                                            <div class="card-content">

                                                <a href="girl" class="card-badge skewBg">coming soon</a>

                                                <h3 class="h3">
                                                    <a href="avatar" class="card-title">mirror wear <span class="span">daily</span></a>
                                                </h3>

                                                <p class="card-price">
                                                    Entry Fee : <span class="span">soon</span>
                                                </p>

                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="latest-game-card">

                                            <figure class="card-banner img-holder" style={{ width: "400", height: "470" }}>
                                                <img src="./assets/images/3.jpg" width="400" height="470" loading="lazy"
                                                    alt="Cyberpunk Daily" class="img-cover" />
                                            </figure>

                                            <div class="card-content">

                                                <a href="vr-avatar" class="card-badge skewBg">coming soon</a>

                                                <h3 class="h3">
                                                    <a href="avatar" class="card-title">vr wear <span class="span">Daily</span></a>
                                                </h3>

                                                <p class="card-price">
                                                    Entry Fee : <span class="span">soon</span>
                                                </p>

                                            </div>

                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </section>







                        <section class="section live-match" id="live" aria-label="live match">
                            <div class="container">

                                <h2 class="h2 section-title">
                                    Watch Demo <span class="span">Video</span>
                                </h2>

                                <figure class="card-banner img-holder" style={{ width: "800", height: "470" }}>
                                    <img src="./assets/images/live-match-banner.jpg" width="800" height="470" loading="lazy"
                                        alt="Live Match Video" class="img-cover" />

                                    <button class="play-btn" aria-label="play video">
                                        <ion-icon name="play"></ion-icon>
                                    </button>

                                </figure>



                            </div>
                        </section>

                    </div>





                    <section class="section shop" id="shop" aria-label="shop"
                        style={{ backgroundImage: `url(${shop1})` }}>
                        <div class="container">

                            <h2 class="h2 section-title">
                                Category Of  <span class="span">Clothes</span>
                            </h2>

                            <p class="section-text">
                                The design seamlessly aligns with the dress, pants, and jacket, creating a sartorial symphony that resonates with modern sensibilities.
                            </p>

                            <ul class="has-scrollbar">

                                <li class="scrollbar-item">
                                    <div class="shop-card">

                                        <figure class="card-banner img-holder" style={{ width: "300", height: "260" }}>
                                            <img src="./assets/images/shop-img-1.jpg" width="300" height="260" loading="lazy"
                                                alt="Women Black T-Shirt" class="img-cover img-cover1" />
                                        </figure>

                                        <div class="card-content">

                                            <a href="t-shirt" class="card-badge skewBg">t-shirt</a>

                                            <h3 class="h3">
                                                <a href="t-shirt" class="card-title">Multi Design T-Shirt</a>
                                            </h3>

                                            <div class="card-wrapper">
                                                <p class="card-price"></p>

                                                <button class="card-btn">
                                                    <ion-icon name="basket"></ion-icon>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li class="scrollbar-item">
                                    <div class="shop-card">

                                        <figure class="card-banner img-holder" style={{ width: "300", height: "260" }}>
                                            <img src="./assets/images/shop-img-2.jpg" width="300" height="260" loading="lazy"
                                                alt="Gears 5 Xbox Controller" class="img-cover img-cover1" />
                                        </figure>

                                        <div class="card-content">

                                            <a href="#" class="card-badge skewBg">Pants</a>

                                            <h3 class="h3">
                                                <a href="#" class="card-title">Denim pants</a>
                                            </h3>

                                            <div class="card-wrapper">
                                                <p class="card-price"></p>

                                                <button class="card-btn">
                                                    <ion-icon name="basket"></ion-icon>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li class="scrollbar-item">
                                    <div class="shop-card">

                                        <figure class="card-banner img-holder" style={{ width: "300", height: "260" }}>
                                            <img src="./assets/images/shop-img-3.jpg" width="300" height="260" loading="lazy"
                                                alt="GeForce RTX 2070" class="img-cover img-cover1" />
                                        </figure>

                                        <div class="card-content">

                                            <a href="#" class="card-badge skewBg">Jacket</a>

                                            <h3 class="h3">
                                                <a href="#" class="card-title">Multi colour</a>
                                            </h3>

                                            <div class="card-wrapper">
                                                <p class="card-price"></p>

                                                <button class="card-btn">
                                                    <ion-icon name="basket"></ion-icon>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li class="scrollbar-item">
                                    <div class="shop-card">

                                        <figure class="card-banner img-holder" style={{ width: "300", height: "260" }}>
                                            <img src="./assets/images/shop-img-4.jpg" width="300" height="260" loading="lazy"
                                                alt="Virtual Reality Smiled" class="img-cover img-cover1" />
                                        </figure>

                                        <div class="card-content">

                                            <a href="home" class="card-badge skewBg">Fulldress</a>

                                            <h3 class="h3">
                                                <a href="home" class="card-title">Top and bottom</a>
                                            </h3>

                                            <div class="card-wrapper">
                                                <p class="card-price"></p>

                                                <button class="card-btn">
                                                    <ion-icon name="basket"></ion-icon>
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </section>


                    <section class="section blog" id="blog" aria-label="blog">
                        <div class="container">

                            <h2 class="h2 section-title">
                                Latest News & <span class="span">Articles</span>
                            </h2>

                            <p class="section-text">

                            </p>

                            <ul class="blog-list">

                                <li>
                                    <div class="blog-card">

                                        <figure class="card-banner img-holder" style={{ width: "400px", height: "290px" }}>
                                            <img src="./assets/images/news1.jpg" width="400px" height="290px" loading="lazy"
                                                alt="Shooter Action Video" class="img-cover" />
                                        </figure>

                                        <div class="card-content">

                                            <ul class="card-meta-list">

                                                <li class="card-meta-item">
                                                    <ion-icon name="person-outline"></ion-icon>

                                                    <a href="#" class="item-text">Admin</a>
                                                </li>

                                                <li class="card-meta-item">
                                                    <ion-icon name="calendar-outline"></ion-icon>

                                                    <time datetime="2022-09-19" class="item-text">September 19, 2022</time>
                                                </li>

                                            </ul>

                                            <h3>
                                                <a href="#" class="card-title">Shooter Action Video</a>
                                            </h3>

                                            <p class="card-text">
                                                Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                                            </p>

                                            <a href="#" class="card-link">
                                                <span class="span">Read More</span>

                                                <ion-icon name="caret-forward"></ion-icon>
                                            </a>

                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div class="blog-card">

                                        <figure class="card-banner img-holder" style={{ width: "400px", height: "290px" }}>
                                            <img src="./assets/images/news2.jpg" width="400px" height="290px" loading="lazy" alt="The Walking Dead"
                                                class="img-cover" />
                                        </figure>

                                        <div class="card-content">

                                            <ul class="card-meta-list">

                                                <li class="card-meta-item">
                                                    <ion-icon name="person-outline"></ion-icon>

                                                    <a href="#" class="item-text">Admin</a>
                                                </li>

                                                <li class="card-meta-item">
                                                    <ion-icon name="calendar-outline"></ion-icon>

                                                    <time datetime="2022-09-19" class="item-text">September 19, 2022</time>
                                                </li>

                                            </ul>

                                            <h3>
                                                <a href="#" class="card-title">The Walking Dead</a>
                                            </h3>

                                            <p class="card-text">
                                                Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                                            </p>

                                            <a href="#" class="card-link">
                                                <span class="span">Read More</span>

                                                <ion-icon name="caret-forward"></ion-icon>
                                            </a>

                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div class="blog-card">

                                        <figure class="card-banner img-holder" style={{ width: "400px", height: "290px" }}>
                                            <img src="./assets/images/news3.jpg" width="400px" height="290px" loading="lazy"
                                                alt="Defense Of The Ancients" class="img-cover" />
                                        </figure>

                                        <div class="card-content">

                                            <ul class="card-meta-list">

                                                <li class="card-meta-item">
                                                    <ion-icon name="person-outline"></ion-icon>

                                                    <a href="#" class="item-text">Admin</a>
                                                </li>

                                                <li class="card-meta-item">
                                                    <ion-icon name="calendar-outline"></ion-icon>

                                                    <time datetime="2022-09-19" class="item-text">September 19, 2022</time>
                                                </li>

                                            </ul>

                                            <h3>
                                                <a href="#" class="card-title">Defense Of The Ancients</a>
                                            </h3>

                                            <p class="card-text">
                                                Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                                            </p>

                                            <a href="#" class="card-link">
                                                <span class="span">Read More</span>

                                                <ion-icon name="caret-forward"></ion-icon>
                                            </a>

                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </section>


                    <section class="newsletter" aria-label="newsletter">
                        <div class="container">

                            <div class="newsletter-card">

                                <h2 class="h2">
                                    Our <span class="span">Newsletter</span>
                                </h2>

                                <form action="" class="newsletter-form">

                                    <div class="input-wrapper skewBg">
                                        <input type="email" name="email_address" aria-label="email" placeholder="Enter your email..." required
                                            class="email-field" />

                                        <ion-icon name="mail-outline"></ion-icon>
                                    </div>

                                    <button type="submit" class="btn newsletter-btn skewBg">
                                        <span class="span">Subscribe</span>

                                        <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
                                    </button>

                                </form>

                            </div>

                        </div>
                    </section>

                </article>
            </main>

            <footer class="footer">

                <div class="footer-top">
                    <div class="container">

                        <div class="footer-brand">

                            <a href="#" class="logo">VD-Wear</a>


                            <p class="footer-text">
                                Dress marketplace the relase etras thats sheets continig passag.
                            </p>

                            <ul class="contact-list">

                                <li class="contact-item">
                                    <div class="contact-icon">
                                        <ion-icon name="location"></ion-icon>
                                    </div>

                                    <address class="item-text">
                                        Address : PO Box  Main Street Jaffna Srilanka
                                    </address>
                                </li>

                                <li class="contact-item">
                                    <div class="contact-icon">
                                        <ion-icon name="headset"></ion-icon>
                                    </div>

                                    <a href="tel:+241245654235" class="item-text">Phone : +94 7677 10 834</a>
                                </li>

                                <li class="contact-item">
                                    <div class="contact-icon">
                                        <ion-icon name="mail-open"></ion-icon>
                                    </div>

                                    <a href="mailto:info@exemple.com" class="item-text">Email : vdwear@exemple.com</a>
                                </li>

                            </ul>

                        </div>

                        <ul class="footer-list">

                            <li>
                                <p class="footer-list-title">Products</p>
                            </li>

                            <li>
                                <a href="#" class="footer-link">T-shirt (26)</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Jackets (11)</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Pants (9)</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Fulldress (3)</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Mask (3)</a>
                            </li>

                        </ul>

                        <ul class="footer-list">

                            <li>
                                <p class="footer-list-title">Need Help?</p>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Terms & Conditions</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Refund Policy</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Affiliate</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Use Cases</a>
                            </li>

                        </ul>

                        <div class="footer-wrapper">

                            <div class="social-wrapper">

                                <p class="footer-list-title">Follow Us</p>

                                <ul class="social-list">

                                    <li>
                                        <a href="#" class="social-link" style={{ backgroundcolor: "#3b5998" }}>
                                            <ion-icon name="logo-facebook"></ion-icon>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="social-link" style={{ backgroundcolor: "#55acee" }}>
                                            <ion-icon name="logo-twitter"></ion-icon>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="social-link" style={{ backgroundcolor: "#d71e18" }}>
                                            <ion-icon name="logo-pinterest"></ion-icon>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="social-link" style={{ backgroundcolor: "#1565c0" }}>
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                    </li>

                                </ul>

                            </div>

                            <div class="footer-newsletter">

                                <p class="footer-list-title">Newsletter Sign Up</p>

                                <form action="" class="footer-newsletter">
                                    <input type="email" name="email_address" aria-label="email" placeholder="Enter your email" required
                                        class="email-field" />

                                    <button type="submit" class="footer-btn" aria-label="submit">
                                        <ion-icon name="rocket"></ion-icon>
                                    </button>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">

                        <p class="copyright">
                            &copy; 2023 VD-Wear. All Right Reserved by <a href="#" class="copyright-link">VD-Wear</a>
                        </p>

                        <img src="./assets/images/footer-bottom-img.png" width="340" height="21" loading="lazy" alt=""
                            class="footer-bottom-img" />

                    </div>
                </div>

            </footer>

            <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
                <ion-icon name="caret-up"></ion-icon>
            </a>

        </div>
    )
}
