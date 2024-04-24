import '../style/Header.css';
import KPI from '../components/KPI';

function Header() {
    return(
        <header className='header'>
            <section className='headText'>
                <h3>Photographer & Filmmaker</h3>
                <h1>Aperture Studios</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </section>
            <KPI 
                text1="1/2000s"
                text2="f/11"
                text3="100"
                text4="Iceland"
            />
        </header>
    )
}

export default Header;