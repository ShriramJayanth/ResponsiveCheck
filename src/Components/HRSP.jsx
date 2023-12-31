import "../HR.css";
import Box from "./Box";
export default function HRSP(){
    return(<><div className="HRSP-main">
    <div className="HRSP-box1">
        <hr className="HRSP-hr"></hr>
        <div className="HRSP-heading1">Before RPO</div>
        <div className="Boxes">
            <Box content="Talent Shortage"/>
            <Box content="Prolonged Hiring Time"/>
            <Box content="Incompatible Technological Infrastructure"/>
            <Box content="Difficulty in Value Assessment"/>
            <Box content="Scaling Challenges"/>
            <Box content="Negative Candidate Perception"/>
            <Box content=" Non-Proactive Approach"/>
        </div>
    </div>
    <div className="HRSP-box2">
    <hr className="HRSP-hr"></hr>
    <div className="HRSP-heading1">After RPO</div>
    <div className="Boxes">
        <Box content="Streamlined Recruitment Process"/>
        <Box content="Integration of Advanced Technology Stack"/>
        <Box content="Enhanced Income Generation"/>
        <Box content="Adaptive Scaling Options"/>
        <Box content="Exceptional Candidate Experience"/>
        <Box content=" Long-Term Approach"/>
        <Box content="Diverse and Skilled Workforce"/>
    </div>
    </div>
    </div>
    <div className="HRFP-dummy"></div>
    <div className="HRFP-dummy"></div>
    <div className="HRFP-dummy"></div>
    </>)
}