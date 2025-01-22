import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <main>
            <img src="/src/assets/react-logo.png" height="50" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps including mobile apps</li>
            </ul>
        </main>
    </StrictMode>
);
