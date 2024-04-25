import '../style/Clients.css';

import Client1 from '../assets/img/Client1.png';
import Client2 from '../assets/img/Client2.png';
import Client3 from '../assets/img/Client3.png';
import Client4 from '../assets/img/Client4.png';
import Client5 from '../assets/img/Client5.png';

function Clients() {
    return(
        <section className='clients'>
            <article className='cliHead'>
                <h1>Past clients</h1>
                <h4>Trusted by your favourite companies</h4>
            </article>
            <article className='cliParts'>
                <img style={{height: '30px'}} src={Client1} alt="Client1" />
                <img style={{ height: '78px' }} src={Client2} alt="Client2" />
                <img style={{ height: '20px' }} src={Client3} alt="Client3" />
                <img style={{ height: '36px' }} src={Client4} alt="Client4" />
                <img style={{ height: '32px' }} src={Client5} alt="Client5" />
            </article>
        </section>
    )
}

export default Clients;