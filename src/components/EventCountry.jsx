import '../style/EventCountry.css';
import KPI from './KPI';

function EventCountry({ imgGround, name, desc, text1, text2, text3, text4 }) {

    const customImg = {
        backgroundImage: `url(${imgGround})`
    };

    return(
        <section style={customImg} className="eventCou">
            <article className='imgHead'>
                <h2>{name}</h2>
                <p>{desc}</p>
            </article>
            <KPI
                text1={text1}
                text2={text2}
                text3={text3}
                text4={text4}
            />
        </section>
    )
}

export default EventCountry;