import '../style/Equipment.css';
import KPI from './KPI';

function Equipment() {
    return(
        <section className='equipment'>
            <article className='equText'>
                <div className='blockText'>
                    <h4>The Gear cage</h4>
                    <h1>The tools that we use.</h1>
                    <p>The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
                    <button>
                        <div></div>
                        <h3>Check it out</h3>
                    </button>
                </div>
            </article>
            <article className='equImg'>
            </article>
            <KPI 
                text1="0,8''h"
                text2="f/5,6"
                text3="100"
                text4="Sweden"
            />
        </section>
    )
}

export default Equipment;