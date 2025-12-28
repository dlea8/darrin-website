import "../index.css"
import "../Styles/GlobalStyles.css"
import "./publications.css"
import PublicationCard from "./publicationCard.js";

export default function Publications() {
    return (
        <div className="section secondary-section">
            <div className="section-title">
                <label>Publications</label>
            </div>
            <div className="section-content-container publications-content">
                <PublicationCard/>
                <PublicationCard/>
                <PublicationCard/>
            </div>
        </div>
    );
}