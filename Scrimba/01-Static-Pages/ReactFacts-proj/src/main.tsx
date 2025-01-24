import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Page />
    </StrictMode>
);

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}
