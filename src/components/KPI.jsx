import '../style/KPI.css';
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { PiClockAfternoonThin } from "react-icons/pi";
import Circle from '../assets/img/circle.png';
import ISO from '../assets/img/iso.png';

function KPI({text1, text2, text3, text4}) {
    return(
        <article className='kpi'>
            <div>
                <PiClockAfternoonThin />
                <h4>{text1}</h4>
            </div>
            <div>
                <img src={Circle} alt="circle" />
                <h4>{text2}</h4>
            </div>
            <div>
                <img src={ISO} alt="ISO" />
                <h4>{text3}</h4>
            </div>
            <div>
                <LiaMapMarkerAltSolid />
                <h4>{text4}</h4>
            </div>
        </article>
    )
}

export default KPI;