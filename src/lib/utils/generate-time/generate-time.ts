import { Locale, format } from "date-fns";
import { enUS, fr } from "date-fns/locale";


export type FormatTime = "HH:mm:ss" | "HH:mm";
export type LocaleKey = "fr" | "enUS";

const locales : Record<LocaleKey, Locale> = {
    fr,
    enUS
};

interface GenerateTimeOptions {
    format?: FormatTime;
    locale?: LocaleKey;
}

const generateTime = (time: Date,  options ?: GenerateTimeOptions) => {
    let formatStr = options?.format || "HH:mm:ss";

    let locale = locales[options?.locale || "fr"];

    const timeFormatted = format(time, formatStr, { locale });
    return timeFormatted;
};

export { generateTime };