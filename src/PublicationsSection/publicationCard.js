import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./publications.css"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default function PublicationCard() {
    return (
        <div className="publication-card-container card">
            <div className="publications-text-container">
                <label className="card-title">Publicaiton Title</label>
                <label className="card-subtitle">1/21/2025</label>
                <label className="card-subtitle">By: Darrin Lea + other authors if applicable</label>
            </div>
            <FontAwesomeIcon className="publication-link-icon" icon={faExternalLink} size="lg"/>
            {/* some kind of link to the pbulication as well */}
        </div>
    );
}