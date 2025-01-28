import Header from "./components/Header";
import EntryCard from "./components/EntryCard";
import entries from "./entries";

function App() {
    const entryCards = entries.map((card) => {
        return (
            <EntryCard
                key={card.id}
                id={card.id}
                img={card.img}
                location={card.location}
                headerText={card.headerText}
                dateFrom={card.dateFrom}
                dateTo={card.dateTo}
                about={card.about}
            />
        );
    });
    return (
        <>
            <Header />
            <main>{entryCards}</main>
        </>
    );
}

export default App;
