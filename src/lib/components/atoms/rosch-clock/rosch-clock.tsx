import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { RoschTextStyled, RoschTextStyledProps } from "../rosch-text/rosch-text.style";
import { FormatTime, generateTime } from "../../../utils/generate-time/generate-time";


export interface RoschClockProps extends RoschTextStyledProps {
  /**
   * @default "HH:mm:ss"
   */
  timeFormat?: FormatTime;
}

const RoschClock : FunctionComponent<RoschClockProps> = ({ id, timeFormat = "HH:mm:ss", ...styledProps }) => {
    const [time, setTime] = useState<string>(generateTime(new Date(), { format : timeFormat }));

    const clockInterval = useCallback(() => {
        const newTime = generateTime(new Date(), { format : timeFormat });
        setTime(newTime);
    }, []);

    useEffect(() => {
        const clock = setInterval(clockInterval, 1000);
        return () => clearInterval(clock);
    }, [clockInterval]);
  
    return (
        <RoschTextStyled {...styledProps} id={`rosch-clock-${id}`}  >
            {time}
        </RoschTextStyled>
    );
};

export { RoschClock };