import '../style/Header.css';
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { PiClockAfternoonThin } from "react-icons/pi";
import Circle from '../assets/img/circle.png';
import ISO from '../assets/img/iso.png';

function Header() {
    return(
        <header className='header'>
            <section>
                <h3>Photographer & Filmmaker</h3>
                <h1>Aperture Studios</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </section>
            <article>
                <div>
                    <PiClockAfternoonThin />
                    <h4>1/2000s</h4>
                </div>
                <div>
                    <img src={Circle} alt="circle" />
                    <h4>f/11</h4>
                </div>
                <div>
                    <img src={ISO} alt="ISO" />
                    <h4>100</h4>
                </div>
                <div>
                    <LiaMapMarkerAltSolid />
                    <h4>Iceland</h4>
                </div>
            </article>
        </header>
    )
}

export default Header;