import { useEffect, useState } from "react";
import "./navbar.css";
import "../Styles/GlobalStyles.css"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        	setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className={`navbar-content ${scrolled ? "space-between" : "center"}`}>
					<div className="navbar-logo">{scrolled ? "Darrin Lea" : ""}</div>

					<nav className="navbar-links">
						<a href="#about" className="navbar-link-element">About</a>
						<a href="#projects" className="navbar-link-element">Projects</a>
						<a href="#publications" className="navbar-link-element">Publications</a>
						<a href="#resume" className="navbar-link-element">Resume</a>
					</nav>

					<button
						className={`navbar-hamburger ${scrolled ? "after-scroll" : "before-scroll"}`}
						onClick={() => setOpen(true)}
						aria-label="Open menu"
					>
						☰
					</button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div className={`mobile-drawer ${open ? "open" : ""}`}>
                <button
                className="drawer-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                >
                ✕
                </button>

				<div className="mobile-drawer-links">
					<a href="#about" onClick={() => setOpen(false)}>About</a>
					<a href="#projects" onClick={() => setOpen(false)}>Projects</a>
					<a href="#publications" onClick={() => setOpen(false)}>Publications</a>
					<a href="#resume" onClick={() => setOpen(false)}>Resume</a>
				</div>
				
            </div>

            {open && <div className="drawer-overlay" onClick={() => setOpen(false)} />}
        </>
    );
}
