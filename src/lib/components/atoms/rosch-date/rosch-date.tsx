import { FunctionComponent } from "react";
import { FormatDate, LocaleKey, generateDate } from "../../../utils/generate-date/generate-date";
import { RoschTextStyled, RoschTextStyledProps } from "../rosch-text/rosch-text.style";


export interface RoschDateProps extends RoschTextStyledProps {
  id: string;
  date?: Date;
  dateFormat?: FormatDate;
  locale?: LocaleKey;
}

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