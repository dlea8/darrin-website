import { useEffect, useState } from "react";
import "./navbar.css";
import "../Styles/GlobalStyles.css"
import SocialIcons from "../SharedComponents/socialIcons";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

	// Way to check if the user has scrolled down on the site - used for switching the navbar style
    useEffect(() => {
        const onScroll = () => {
        	setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

	// Disable scrolling when the side drawer is open
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		// cleanup
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

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
				<div className="mobile-drawer-header">
					<label className="navbar-logo">Darrin Lea</label>
					<button
					className="drawer-close"
					onClick={() => setOpen(false)}
					aria-label="Close menu"
					>
					✕
					</button>
				</div>

				<div className="mobile-drawer-links">
					<a href="#about" onClick={() => setOpen(false)}>About</a>
					<a href="#projects" onClick={() => setOpen(false)}>Projects</a>
					<a href="#publications" onClick={() => setOpen(false)}>Publications</a>
					<a href="#resume" onClick={() => setOpen(false)}>Resume</a>
				</div>

				<div className="mobile-drawer-socials">
					<SocialIcons/>
				</div>

				<div className="spacer"/>

				<div className="mobile-drawer-copywrite">
					©{new Date().getFullYear()} Darrin Lea
				</div>
				
            </div>

            {open && <div className="drawer-overlay" onClick={() => setOpen(false)} />}
        </>
    );
}
