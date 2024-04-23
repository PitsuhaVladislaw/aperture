import '../style/CollagePro.css';

function CollagePro() {
    const materialCollage = [
        {   
            name: 'Product Photography',
            text: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'
        },
        {
            name: 'Architecture Photography',
            text: 'Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.'
        },
        {
            name: 'Drone Photography',
            text: 'Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'
        },
        {
            name: 'Wildlife Photography',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.'
        }
    ];

    const BlockCol = ({ imgSet, name, text }) => {
        return(
            <article className={imgSet}>
                <div className='textSet'>
                    <h2>{name}</h2>
                    <p>{text}</p>
                    <button>
                        <div></div>
                        <h5>Read more</h5>
                    </button>
                </div>
            </article>
        )
    }

    return(
        <section className='collagePro'>
            <div className='collageBlock'>
                <div className='headCollage'>
                    <h2>What we do.</h2>
                    <h4>The areas that we're specialized in.</h4>
                </div>
                <div className='collageGrid'>
                    <BlockCol 
                        imgSet="imgCol1"
                        name={materialCollage[0].name}
                        text={materialCollage[0].text}
                    />
                    <BlockCol
                        imgSet="imgCol2"
                        name={materialCollage[1].name}
                        text={materialCollage[1].text}
                    />
                    <BlockCol
                        imgSet="imgCol3"
                        name={materialCollage[2].name}
                        text={materialCollage[2].text}
                    />
                    <BlockCol
                        imgSet="imgCol4"
                        name={materialCollage[3].name}
                        text={materialCollage[3].text}
                    />
                </div>
            </div>
        </section>
    )
}

export default CollagePro;