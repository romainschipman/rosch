import { Locale, format } from "date-fns";
import { enUS, fr } from "date-fns/locale";


export type FormatDate = "dd/MM/yyyy" | "mm/dd/yyyy" | "dd MMM yyyy" | "dd MMMM yyyy" | "MMMM d, yyyy";
export type LocaleKey = "fr" | "enUS";

const locales : Record<LocaleKey, Locale> = {
    fr,
    enUS
};

interface GenerateDateOptions {
    /**
     * The format in which the date will be displayed.
     * Defaults to "dd/MM/yyyy".
     */
    format?: FormatDate;
    /**
     * The locale key used for formatting the date.
     * Defaults to "fr" (French).
     */
    locale?: LocaleKey;
}

/**
 * A utility function that formats a given date according to the specified format
 * and locale. If no format or locale is provided, it defaults to "dd/MM/yyyy" and
 * "fr" (French locale).
 *
 * @param date - The date to be formatted.
 * @param options - Optional settings for format and locale.
 * @returns {string} - The formatted date string.
 *
 * @example
 * ```ts
 * const formattedDate = generateDate(new Date(), { format: "dd MMM yyyy", locale: "enUS" });
 * console.log(formattedDate); // e.g., "29 Sep 2024"
 * ```
 */
const generateDate = (date: Date,  options ?: GenerateDateOptions) => {
    let formatStr = options?.format || "dd/MM/yyyy";

    let locale = locales[options?.locale || "fr"];

    const timeFormatted = format(date, formatStr, { locale });
    return timeFormatted;
};

export { generateDate };