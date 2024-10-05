import { FunctionComponent } from "react";
import { RoschCheckboxStyled, RoschCheckboxStyledProps } from "./rosch-checkbox.style";

export interface RoschCheckboxProps extends RoschCheckboxStyledProps {
    label: string;
}

const RoschCheckbox : FunctionComponent<RoschCheckboxProps> = ({ id, label }) => {
    return (
        <RoschCheckboxStyled id={id}>
            <label htmlFor={`input-checkbox-${id}`}>{label}</label>
            <input id={`input-checkbox-${id}`} className="checkbox__input" type="checkbox" />
        </RoschCheckboxStyled>
    );
};

export { RoschCheckbox };