import "./projectStyles.css";

export default function ProjectCardNew(props) {
    return (
        <div className="new-project-card-container hover-border">
            <div className="new-project-card-text-container">
                <label className="new-project-card-title">Project Title</label>
                <label className="new-project-card-subtitle">
                    Subtext description fo the project goes here. Sample description text here
                </label>
                {/* want to add a read more link witb an arrow icon and underline in blue */}
                {/* Read more could either be a link or a pill shape button 
                    probably want it consistent with the navbar style */}
                {/* Maybe a small image or logo here as well? */}
                <div className="spacer"></div>
                {/* <div className="new-project-card-accent-line"></div> */}
            </div>

        </div>
    );
}