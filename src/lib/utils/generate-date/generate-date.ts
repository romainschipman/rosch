import { Locale, format } from "date-fns";
import { enUS, fr } from "date-fns/locale";


export type FormatDate = "dd/MM/yyyy" | "mm/dd/yyyy" | "dd MMM yyyy" | "dd MMMM yyyy";
export type LocaleKey = "fr" | "enUS";

const locales : Record<LocaleKey, Locale> = {
    fr,
    enUS
};

interface GenerateDateOptions {
    format?: FormatDate;
    locale?: LocaleKey;
}

const generateDate = (date: Date,  options ?: GenerateDateOptions) => {
    let formatStr = options?.format || "dd/MM/yyyy";

    let locale = locales[options?.locale || "fr"];

    const timeFormatted = format(date, formatStr, { locale });
    return timeFormatted;
};

export { generateDate };