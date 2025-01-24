import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Page />
    </StrictMode>
);

function Page() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

function Header() {
    return (
        <header className="header">
            <img src="/src/assets/react-logo.png" className="react-logo" alt="react logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function Main() {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul className="fact-list">
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps including mobile apps</li>
            </ul>
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Ziroll development. All rights reserved.</small>
        </footer>
    );
}
