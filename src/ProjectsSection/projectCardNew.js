import "./projectStyles.css";

export default function ProjectCardNew(props) {
    return (
        <div className="new-project-card-container">
            <div className="new-project-card-text-container">
                <label className="new-project-card-title">Project Title</label>
                <label className="new-project-card-subtitle">
                    Subtext description fo the project goes here. Sample description text here
                </label>
                {/* want to add a read more link witb an arrow icon and underline in blue */}
                <div className="spacer"></div>
                <div className="new-project-card-accent-line"></div>
            </div>

        </div>
    );
}