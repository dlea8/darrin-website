import "../index.css"
import "../Styles/GlobalStyles.css"
import "./publications.css"
import PublicationCard from "./publicationCard.js";
import lsu_icon from '../assets/lsu_icon.png';
import inl_logo from "../assets/inl_logo.png";
import tmobile_logo from "../assets/tmobile_logo.png"


export default function Publications() {
    return (
        <div className="section secondary-section">
            <div className="section-title">
                <label>Publications</label>
            </div>
            <div className="section-content-container publications-content">
                <PublicationCard image={lsu_icon} backgroundColor="#4c258160"/>
                <PublicationCard image={inl_logo} backgroundColor="#8ec23f60"/>
                <PublicationCard image={tmobile_logo} backgroundColor="#e5017e60"/>
            </div>
        </div>
    );
}