import "../HR.css";
import ScrollItem from "./ScrollItem";
export default function Partnerships(){
    return(<>
        <div className="P-main">
            <div className="P-hr"></div>
            <div className="P-heading1"><b>FIVE </b> different types of partnerships</div>
            <div className="P-scroll">
                <ScrollItem/>
                <ScrollItem/>
                <ScrollItem/>
                <ScrollItem/>
                <ScrollItem/>
            </div>
        </div>
    </>)
}