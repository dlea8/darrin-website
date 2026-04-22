import './technologies.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faJs,
    faPython,
    faJava,
    faNodeJs,
    faHtml5,
    faCss3Alt,
    faGitAlt,
    faDocker,
    faAws,
    faLinux,
    faAndroid,
    faGithub,
    faApple
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const technologies = [
    { name: 'React', icon: faReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
    { name: 'Python', icon: faPython, color: '#3776AB' },
    { name: 'Java', icon: faJava, color: '#E76F00' },
    { name: 'Node.js', icon: faNodeJs, color: '#339933' },
    { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: faCss3Alt, color: '#1572B6' },
    { name: 'Git', icon: faGitAlt, color: '#F05032' },
    { name: 'Docker', icon: faDocker, color: '#2496ED' },
    { name: 'AWS', icon: faAws, color: '#FF9900' },
    { name: 'SQL', icon: faDatabase, color: '#00758F' },
    { name: 'Linux', icon: faLinux, color: '#FCC624' },
    { name: 'IOS', icon: faApple, color: '#181717' },
    { name: 'Android', icon: faAndroid, color: '#3DDC84' },
    { name: 'GitHub', icon: faGithub, color: '#181717' },

];

function getPerRow() {
    if (typeof window === 'undefined') return 5;
    if (window.matchMedia('(max-width: 480px)').matches) return 3;
    if (window.matchMedia('(max-width: 768px)').matches) return 4;
    return 5;
}

function chunkRows(items, perRow) {
    const rows = [];
    for (let i = 0; i < items.length; i += perRow) {
        rows.push(items.slice(i, i + perRow));
    }
    return rows;
}

export default function Technologies() {
    const [perRow, setPerRow] = useState(getPerRow);

    useEffect(() => {
        const update = () => setPerRow(getPerRow());
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const rows = chunkRows(technologies, perRow);

    return (
        <div className="section">
            <div className="section-title">
                <label>Technologies</label>
            </div>
            <div className="section-content-container tech-honeycomb">
                {rows.map((row, rowIdx) => (
                    <div
                        key={rowIdx}
                        className={`tech-row${rowIdx % 2 ? ' tech-row-offset' : ''}`}
                    >
                        {row.map((tech) => (
                            <div
                                key={tech.name}
                                className="tech-bubble"
                                title={tech.name}
                                style={{ '--bubble-color': tech.color }}
                            >
                                <FontAwesomeIcon
                                    icon={tech.icon}
                                    className="tech-icon"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
