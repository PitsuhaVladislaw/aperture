import '../style/Footer.css';

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import Logo from '../assets/img/Combined-Shape.png'

function Footer() {
    const refreshPage = () => {
        window.location.reload();
    }

    return(
        <footer className='footer'>
            <div className='centBlockFo'>
                <section>
                    <div className='logoPages'>
                        <img onClick={refreshPage} src={Logo} alt="Logo" />
                        <h3>Photographers & videographers capturing the world around us.</h3>
                    </div>
                    <div className='tablePages'>
                        <article>
                            <h1>Business areas</h1>
                            <h2>Product Photography</h2>
                            <h2>Architecture Photography</h2>
                            <h2>Drone Photography</h2>
                            <h2>Wildlife Photography</h2>
                        </article>
                        <article>
                            <h1>Pages</h1>
                            <h2>Gear cage</h2>
                            <h2>Featured images</h2>
                            <h2>Contact</h2>
                            <h2>Style guide</h2>
                            <h2>Instructions</h2>
                            <h2>Changelog</h2>
                        </article>
                    </div>
                </section>
                <div className='line'></div>
                <section className='textArea'>
                    <article>
                        <h4>Subscribe to our newsletter</h4>
                        <h5>Read about all the things we do.</h5>
                    </article>
                    <div className='textBlockBut'>
                        <input type="text" name="textPost" id="textPost" />
                        <button></button>
                    </div>
                </section>
                <div className='line'></div>
                <section className='linkSect'>
                    <h6>© Aperture Photography, Inc. All rights reserved. Licensing</h6>
                    <article className='blockLinks'>
                        <FaXTwitter />
                        <FaInstagram />
                        <FaFacebookF />
                    </article>
                </section>
            </div>
        </footer>
    )
}

export default Footer;