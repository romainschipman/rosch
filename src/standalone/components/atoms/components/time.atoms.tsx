import { RoschTime } from "../../../../lib";

const TimeStandalone = () => {
    let time = new Date();
    time.setHours(10, 0, 0);
    return(
        <>
            <RoschTime 
                time={time}
                id="rosch-time"
            />
        </>  
    ) ;
};

export { TimeStandalone };