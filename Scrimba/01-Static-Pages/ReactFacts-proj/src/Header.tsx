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

export default Header;
