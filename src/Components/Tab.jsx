import "../HR.css";
export default function Tab(prop){
    return(<div className="Tab-main">
        <div className="Tab-heading">{prop.heading}</div>
        <div className="Tab-desc">{prop.desc}</div>
    </div>)
}