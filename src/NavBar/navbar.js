import { useEffect, useState } from "react";
import "./navbar.css";

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
            <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
                <div className="navbar__content">
					<div className="navbar__logo">Logo</div>

					<nav className="navbar__links">
						<a href="#about">About</a>
						<a href="#projects">Projects</a>
						<a href="#contact">Contact</a>
					</nav>

					<button
						className={`navbar__hamburger ${scrolled ? "after-scroll" : "before-scroll"}`}
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

                <a href="#about" onClick={() => setOpen(false)}>About</a>
                <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>

            {open && <div className="drawer-overlay" onClick={() => setOpen(false)} />}
        </>
    );
}
