import "../HR.css";
import pic3 from "../Assets/pic3.png";
import Tab from "./Tab";
export default function HRTP(){
    return(<><div className="HRTP-main">
        <div className="HRTP-box1">
            <div className="HRTP-content1">    
              <hr className="HRTP-hr"></hr>
              <div className="HRTP-heading1">Unique Selling Proposition:</div>
              <div className="HRTP-desc1">At GetMax RPO, our USP lies in innovation, quality, and personalized service. Post-hiring support, continuous learning programs, and customized hiring strategies set us apart.</div>
            
            </div>
            <div className="HRTP-pic1"><img src={pic3} alt="pic3"></img></div>
        </div>
        <div className="HRTP-box2">
            <Tab
                heading="Post-hiring support"
                desc="We go beyond recruitment, ensuring employee retention, growth, and satisfaction"
            />
            <Tab
                heading="Continuous learning"
                desc="Through our Learning Management System (LMS), we provide continuous learning programs for skill enhancement"
            />
            <Tab
                heading="Customised hiring strategy"
                desc="We tailor our hiring strategy for each requirement, understanding that every role is unique"
            />
        </div>
    </div>
    <div className="HRFP-dummy"></div>
    </>)
}

