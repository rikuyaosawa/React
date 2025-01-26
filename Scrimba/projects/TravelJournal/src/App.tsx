import Header from "./components/Header";
import EntryCard from "./components/EntryCard";
import entries from "./entries";

function App() {
    return (
        <>
            <Header />
            <main>
                <EntryCard {...entries[0]} />
                <EntryCard {...entries[1]} />
                <EntryCard {...entries[2]} />
            </main>
        </>
    );
}

export default App;
