import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";
import Logo from "../images/logo";
import FaFacebookF from "../images/faFacebookF";
import FaInstagram from "../images/FaInstagram";

const MainLogo = "../images/bhe-Logo.png";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="footer-content">
                            <a className="brand" title="" href="/">
                                <Logo />
                                <p>Have questions about bookings, our restaurant, or want to learn more about Mata Rocks and San
                                    Pedro? Simply email us below with your name, email, and message, and we’ll be sure to respond within
                                    24 hours.</p>
                            </a>

                            <ul className="social">

                                <li id="badges">
                                    <a href="">
                                        <StaticImage alt="badge" src="../images/badge.png" />
                                    </a>
                                    <a href="">
                                        <StaticImage alt="badge 2" src="../images/badge2.png" />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-4 second">
                        <div className="footer-content">
                            <h1>Reach Us</h1>
                            <p>
                                Tel:

                                <a href="tel:5012262336"> +(501) 226 2336</a>
                            </p>
                            <p>
                                Email:

                                <a href="mailto:reservations@matarock.com"> reservations@matarock.com</a>
                            </p>
                            <p>
                                Hours:

                                <a href=""> Mon - Sun, 8:00am to 4:00pm CST</a>
                            </p>
                            <p id="last-item">
                                Book a room at our Flagship Hotel.
                                <a href="https://barefoothotelbelize.com/" target="_blank">
                                    <StaticImage alt="barefoot logo" src="../images/Barefoot-Logo12-white-bze.png" />
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="footer-content">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15186.426472875184!2d-87.9753892!3d17.9038387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5c9b06febb2791%3A0x684ad7d1597b8b81!2sMata%20Rocks%20Resort!5e0!3m2!1sen!2sbz!4v1733772879537!5m2!1sen!2sbz" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>

                </div>
                <div className="footer-copyright">
                    <p>Copyright © {new Date().getFullYear()} Mata Rocks Resort. All Rights Reserved. Belize.</p>
                </div>
            </div>
            {/*  <div className="footer-bottom-bg">

        </div>*/}

        </div>


    );
}

export default Footer;

