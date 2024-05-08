import '../style/Clients.css';

import Client1 from '../assets/img/Client1.png';
import Client2 from '../assets/img/Client2.png';
import Client3 from '../assets/img/Client3.png';
import Client4 from '../assets/img/Client4.png';
import Client5 from '../assets/img/Client5.png';

function Clients() {

    const clients = [
        { src: Client1, alt: "Client1", height: '30px' },
        { src: Client2, alt: "Client2", height: '78px' },
        { src: Client3, alt: "Client3", height: '20px' },
        { src: Client4, alt: "Client4", height: '36px' },
        { src: Client5, alt: "Client5", height: '32px' }
    ];

    return(
        <section className='clients'>
            <article className='cliHead'>
                <h1>Past clients</h1>
                <h4>Trusted by your favourite companies</h4>
            </article>
            <article className='cliParts'>
                {clients.map((client, index) => (
                    <img style={{ 
                        height: client.height, 
                        filter: `blur(${index * 2}px)`,
                        transition: 'filter 0.5s ease-in-out',
                        animationDelay: `${index * 0.5}s`
                    }} 
                    src={client.src} 
                    alt={client.alt} />
                ))}
            </article>
        </section>
    )
}

export default Clients;