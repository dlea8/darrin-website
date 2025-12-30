import "../index.css"
import "../Styles/GlobalStyles.css"
import "./publications.css"
import PublicationCard from "./publicationCard.js";
import lsu_icon from '../assets/lsu_icon.png';
import inl_logo from "../assets/inl_logo.png";
import tmobile_logo from "../assets/tmobile_logo.png"
import acsac_icon from "../assets/acsac_logo.png"


export default function Publications() {
    return (
        <div className="section secondary-section">
            <div className="section-title">
                <label>Publications</label>
            </div>
            <div className="section-content-container publications-content">
                <PublicationCard 
                    title="REx86: A Local Large Language Model for Assisting in x86 Assembly Reverse Engineering" 
                    date="12/10/2025"
                    authors="Darrin Lea, James Ghawaly, Golden Richard III, Aisha Ali-Gombe, Andrew Case"
                    image={acsac_icon} 
                    backgroundColor="#0b843e60"
                    link="https://arxiv.org/abs/2510.20975"/>
                <PublicationCard
                    title="Optimizing LLM x86 Assembly Code Comprehension through Fine-Tuning"
                    date="4/3/2025"
                    authors="Darrin Lea"
                    image={lsu_icon} 
                    backgroundColor="#4c258160"
                    link="https://repository.lsu.edu/gradschool_theses/6140/"/>
                <PublicationCard
                    title="Reducing AI RAG Hallucination by Optimizing Routing Techniques"
                    date="8/16/2024"
                    authors="Darrin Lea, Rafer Cooley, Michael Cutshaw, Zachary Priest"
                    image={inl_logo} 
                    backgroundColor="#2ba2d960"
                    link="https://www.osti.gov/biblio/2474834"/>
                <PublicationCard
                    title="Threat Modeling Industrial Control Systems"
                    date="4/2024"
                    authors="Darrin Lea"
                    image={lsu_icon} 
                    backgroundColor="#4c258160"
                    link=""/>
                <PublicationCard
                    title="Rescue System (US12302448B2)"
                    date="5/13/2025"
                    authors="Jim Song, Sarah Lynn O'Brien, Darrin Michael Lea, Henry Vy, Paulyn Ladignon Monasterio, Eric Steven Hill"
                    image={tmobile_logo}
                    backgroundColor="#e5017e60"
                    link="https://patents.google.com/patent/US12302448B2/en?oq=US12302448B2"/>
            </div>
        </div>
    );
}