import type Entry from "../interfaces/Entry";

function EntryCard(props: Entry) {
    return (
        <article>
            <img src={props.img.src} alt={props.img.alt} />
            <div className="content-container">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="location-text">{props.location.name}</span>
                    <a href={props.location.mapLink} target="_blank">
                        <p>View on Google Maps</p>
                    </a>
                </div>
                <h1>{props.headerText}</h1>
                <p className="date">
                    {props.dateFrom} - {props.dateTo}
                </p>
                <p className="about-text">{props.about}</p>
            </div>
        </article>
    );
}

export default EntryCard;
