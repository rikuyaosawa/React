import Header from "./components/Header";
import EntryCard from "./components/EntryCard";
import entries from "./entries";

function App() {
    const entryCards = entries.map((entry) => {
        return <EntryCard key={entry.id} {...entry} />;
    });
    return (
        <>
            <Header />
            <main>{entryCards}</main>
        </>
    );
}

export default App;
