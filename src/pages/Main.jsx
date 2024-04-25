import CollagePro from "../components/CollagePro";
import EventCountry from "../components/EventCountry";
import '../style/EventCountry.css'

import imgGround1 from '../assets/img/imgGround1.jpg';
import imgGround2 from '../assets/img/imgGround2.jpg';
import imgGround3 from '../assets/img/imgGround3.jpg';
import Equipment from "../components/Equipment";
import Clients from "../components/Clients";

function MainPage() {
    return(
        <main className="mainPage">
            <CollagePro />
            <EventCountry
                imgGround={imgGround1}
                name="Sunset at Mount Fuji"
                desc="Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non."
                text1="1''"
                text2="f/16"
                text3="400"
                text4="Japan"
            />
            <Equipment />
            <EventCountry 
                imgGround={imgGround2}
                name="Monstera Leafs"
                desc="Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt."
                text1="1/400s"
                text2="f/3,5"
                text3="100"
                text4="Costa Rica"
            />
            <Clients />
            <EventCountry
                imgGround={imgGround3}
                name="Star fall in the Himalayas"
                desc="Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula."
                text1="6''"
                text2="f/11"
                text3="800"
                text4="Nepal"
            />
        </main>
    )
}

export default MainPage;