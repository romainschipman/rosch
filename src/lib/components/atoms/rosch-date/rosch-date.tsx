import { FunctionComponent } from "react";
import { FormatDate, LocaleKey, generateDate } from "../../../utils/generate-date/generate-date";
import { RoschTextStyled, RoschTextStyledProps } from "../rosch-text/rosch-text.style";


export interface RoschDateProps extends RoschTextStyledProps {
    /**
     * A unique identifier for the date component.
     * It will be used as the `id` attribute in the rendered HTML element.
     */
    id: string;

    /**
     * The date to be displayed.
     * If no date is provided, the current date will be used.
     *
     * @default new Date()
     */
    date?: Date;

    /**
     * The format in which the date will be displayed.
     * Defaults to "dd/MM/yyyy" (day/month/year).
     *
     * @default "dd/MM/yyyy"
     */
    dateFormat?: FormatDate;

    /**
     * The locale to be used when formatting the date.
     * If not provided, the default locale will be used.
     */
    locale?: LocaleKey;
}

/**
 * A component that displays a formatted date.
 *
 * The `RoschDate` component formats and displays a date using the provided
 * `date`, `dateFormat`, and `locale` props. If no `date` is provided, it defaults
 * to the current date. You can customize the format by passing a specific format
 * string via the `dateFormat` prop. The locale can also be adjusted to format the
 * date according to different cultural conventions.
 *
 * @param id - A unique identifier for the date component.
 * @param date - An optional date to be displayed (defaults to the current date).
 * @param dateFormat - An optional format for the displayed date (default: "dd/MM/yyyy").
 * @param locale - An optional locale for date formatting.
 * @param styledProps - Additional props for styling.
 *
 * @example
 * ```tsx
 * <RoschDate id="custom-date" date={new Date(2023, 11, 25)} dateFormat="MMMM d, yyyy" locale="en" />
 * ```
 */
const RoschDate : FunctionComponent<RoschDateProps> = ({ id, date = new Date(), dateFormat = "dd/MM/yyyy", locale, ...styledProps }) => {

    const displayDate = () => {
        return generateDate(date, { format : dateFormat, locale });
    };

  
    return (
        <RoschTextStyled id={id} {...styledProps}>
            {displayDate()}
        </RoschTextStyled>
    );
};

export { RoschDate };