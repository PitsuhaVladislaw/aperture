import '../style/NavMenu.css'

import Logo from '../assets/img/Combined-Shape.png'

function NavMenu() {
    const refreshPage = () => {
        window.location.reload();
    }

    return(
        <nav className='navMenu'>
            <article className='logo'>
                <img onClick={refreshPage} src={Logo} alt="logp" />
            </article>
            <article className='menuLink'>
                <div style={{marginRight: '24px'}}>
                    <h3>Business areas</h3>
                </div>
                <div>
                    <h3>Featured images</h3>
                </div>
                <div>
                    <h3>Geear cage</h3>
                </div>
                <div>
                    <h3>Contact</h3>
                </div>
                <button>
                    <h4>Get template</h4>
                </button>
            </article>
        </nav>
    )
}

export default NavMenu;