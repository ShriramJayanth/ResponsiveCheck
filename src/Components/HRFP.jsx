import "../HR.css";
import pic1 from "../Assets/pic1.png";
import pic2 from "../Assets/pic2.png";

export default function HRFP(){
    return(<div className="HRFP-main">
    <div className="HRFP-dummy"></div>
    <div className="HRFP-box1">
        <div className="HRFP-content1">
            <div className="HRFP-heading1">Bridging Gaps, Building Skills:</div>
            <div className="HRFP-subtitle1">Uncover the Core of Our Sector-Specific Training Solutions</div>
            <div className="HRFP-desc1">At GetMax solutions, We aim to provide a holistic approach for hiring the right people to drive your business forward. We help organisations attract, engage and retain the talent needed to win in this rapidly changing talent marketplace.</div>
        </div>
        <div className="HRFP-pic1"><img src={pic1} alt="pic1"></img></div>
    </div>
    <div className="HRFP-box2">
        <div className="HRFP-pic2"><img src={pic2} alt="pic2"></img></div>
        <div className="HRFP-content2">
            <div className="HRFP-icon">GetMax</div>
            <div className="HRFP-heading2">WHAT DOES RPO PROVIDERS DO?</div>
            <div className="HRFP-desc2">At GetMax HR RPO, we act as an extension of your recruitment department, ensuring comprehensive strategic solutions. We specialize in talent acquisition, leveraging advanced processes, technologies, and expertise to drive efficiencies and results.</div>
        </div>
    </div>
    <div className="HRFP-dummy"></div>

    </div>)
}