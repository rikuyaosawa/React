import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import MainContent from "./MainContent";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header />
        <MainContent />
    </StrictMode>
);
