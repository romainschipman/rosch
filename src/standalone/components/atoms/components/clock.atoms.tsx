import { RoschClock } from "../../../../lib";

const ClockStandalone = () => {
    return (
        <>
            <RoschClock id="rosch-clock" />
            <RoschClock id="rosch-clock" timeFormat="HH:mm" />
        </>
    );
};

export { ClockStandalone };