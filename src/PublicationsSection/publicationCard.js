import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./publications.css"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default function PublicationCard({
    title,
    authors,
    date,
    image, 
    backgroundColor = "#ffffff"
}) {

    return (
        <div className="publication-card-container card" style={{ '--image-bg-color': backgroundColor }}>
            <div className="publications-text-container">
                <label className="card-title">{title}</label>
                <label className="card-subtitle">Published: {date}</label>
                <label className="card-subtitle">Authors: {authors}</label>
            </div>
            {/* <FontAwesomeIcon className="publication-link-icon" icon={faExternalLink} size="lg"/> */}
            {/* some kind of link to the pbulication as well */}
            <div className="publication-image-container">
                <img src={image} alt="Unavailable"/>
            </div>
        </div>
    );
}