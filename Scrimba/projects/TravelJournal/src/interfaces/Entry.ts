interface Entry {
    img: {
        src: string;
        alt: string;
    };
    location: {
        name: string;
        mapLink: string;
    };
    headerText: string;
    dateFrom: string;
    dateTo: string;
    about: string;
}

export default Entry;
