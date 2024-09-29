import { RoschTextStyled, RoschTextStyledProps } from "../rosch-text/rosch-text.style";
import { FormatTime, LocaleKey, generateTime } from "../../../utils/generate-time/generate-time";
import { FunctionComponent } from "react";

export interface RoschTimeProps extends RoschTextStyledProps {
    /**
     * The date and time to be displayed.
     * This prop is required.
     */
    time: Date;
    /**
     * The format in which the time will be displayed.
     * Defaults to "HH:mm" (24-hour format: hours:minutes).
     *
     * @default "HH:mm"
     */
    timeFormat?: FormatTime;
    /**
     * The locale to be used when formatting the time.
     * If not provided, the default locale will be used.
     */
    timeLocale?: LocaleKey;
}

/**
 * A component that displays a formatted time.
 *
 * The `RoschTime` component takes a `time` prop (of type `Date`) and displays it
 * using the provided `timeFormat` and `timeLocale` options. By default, the time is
 * formatted in 24-hour format ("HH:mm"), but you can customize the format and locale
 * to display the time according to different preferences or cultural conventions.
 *
 * @param time - The date and time to be formatted and displayed (required).
 * @param timeFormat - The format to display the time in (default: "HH:mm").
 * @param timeLocale - The locale for formatting the time.
 *
 * @example
 * ```tsx
 * <RoschTime time={new Date()} timeFormat="h:mm a" timeLocale="en"  />
 * ```
 */
const RoschTime : FunctionComponent<RoschTimeProps> = ({ time, timeLocale, timeFormat="HH:mm" }) => {

    const displayTime = () => {
        return generateTime(time, { locale: timeLocale, format: timeFormat });
    };

    return (
        <RoschTextStyled id="rosch-text">
            {displayTime()}
        </RoschTextStyled>
    );
};

export { RoschTime };