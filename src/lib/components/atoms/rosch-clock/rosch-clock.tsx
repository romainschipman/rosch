import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { RoschTextStyled, RoschTextStyledProps } from "../rosch-text/rosch-text.style";
import { FormatTime, generateTime } from "../../../utils/generate-time/generate-time";


export interface RoschClockProps extends RoschTextStyledProps {
    /**
     * The format in which the time will be displayed.
     * Defaults to "HH:mm:ss" (hours:minutes:seconds).
     *
     * @default "HH:mm:ss"
  */
  timeFormat?: FormatTime;
}

/**
 * A clock component that displays the current time and updates every second.
 *
 *  The default format is "HH:mm:ss", but you can
 * customize it by providing a different format.
 *
 * @param id - A unique identifier for the clock, used in the `id` attribute of the rendered HTML element.
 * @param timeFormat - An optional format for the displayed time (default: "HH:mm:ss").
 * @param styledProps - Any additional props passed to `RoschTextStyled` for styling purposes.
 *
 * @example
 * ```tsx
 * <RoschClock id="my-clock" timeFormat="HH:mm" colorVariant="danger" />
 * ```
 */
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