import { RoschDate } from "../../../../lib";


const DateStandalone = () => {

    const date = new Date("2024-07-19");
    return (
        <>
            <RoschDate date={date} id="rosch-date-standalone" locale="enUS" />
            <RoschDate date={date} id="rosch-date-standalone" dateFormat="dd MMM yyyy" locale="fr" />
            <RoschDate date={date} id="rosch-date-standalone" dateFormat="dd MMMM yyyy" locale="enUS" />
        </>
    );
};

export { DateStandalone };