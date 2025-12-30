import "./publications.css"

export default function PublicationCard({
    title,
    authors,
    date,
    image, 
    backgroundColor = "#ffffff",
    link
}) {

    return (
        <a href={link} className="publication-card-link" target="_blank" rel="noopener noreferrer">
            <div className="publication-card-container card" style={{ '--image-bg-color': backgroundColor }}>
                <div className="publications-text-container">
                    <label className="card-title">{title}</label>
                    <label className="card-subtitle">Published: {date}</label>
                    <label className="card-subtitle">Authors: {authors}</label>
                </div>
                <div className="publication-image-container">
                    <img src={image} alt="Unavailable"/>
                </div>
            </div>
        </a>
    );
}